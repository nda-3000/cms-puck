import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import type { ComponentConfig } from '@measured/puck';
import { Toggle } from '../ui/toggle';
import { Bold, Italic, Strikethrough, List, ListOrdered } from 'lucide-react'; // Removed unused icons for cleanliness
import { useEffect } from 'react';

export type RichTipTapProps = {
  content: string;
};

// --- 1. The Editor Component (Sidebar Input) ---
const RichTipTapInput = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => {
  const editor = useEditor({
    extensions: [
      //   Document,
      StarterKit,
      Highlight,
      //   Link.configure({ openOnClick: false }),
      //   Heading.configure({
      // levels: [1, 2, 3],
      //   }),
      Image,
    ],
    content: value || '', // Initial content
    onUpdate: ({ editor }) => {
      // This triggers when the USER types or clicks buttons
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm focus:outline-none min-h-[150px] p-2 w-full max-w-none',
      },
    },
    autofocus: true,
    editable: true,
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      // { emitUpdate: false } stops the loop
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
  }, [value, editor]);

  if (!editor) return null;

  const MenuBar = () => (
    <div className="sticky top-0 z-10 flex flex-wrap gap-1 border-b border-gray-200 bg-gray-50 p-1">
      <div className="button-group">
        <Toggle
          size="sm"
          variant="outline"
          pressed={editor.isActive('heading', { level: 1 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </Toggle>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>
      </div>
      <Toggle
        size="sm"
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-3 w-3" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-3 w-3" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-3 w-3" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-3 w-3" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('orderedList')}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-3 w-3" />
      </Toggle>
    </div>
  );

  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
      <MenuBar />
      <EditorContent editor={editor} />
    </div>
  );
};

// --- 2. Puck Configuration ---
export const RichTipTap: ComponentConfig<RichTipTapProps> = {
  fields: {
    content: {
      type: 'custom',
      label: 'Content',
      render: ({ value, onChange }) => {
        return <RichTipTapInput value={value} onChange={onChange} />;
      },
    },
  },
  defaultProps: {
    content: '<p>Start typing...</p>',
  },
  // --- 3. Canvas Render ---
  render: ({ content }) => {
    return <div className="prose prose-lg mx-auto max-w-none p-6" dangerouslySetInnerHTML={{ __html: content }} />;
  },
};

export default RichTipTap;
