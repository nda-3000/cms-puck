import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import LinkExtension from '@tiptap/extension-link';
import { Bold, Italic, List, ListOrdered, Strikethrough } from 'lucide-react';
import { Toggle } from '~/components/ui/toggle'; // Assuming you have shadcn toggle, or use a Button
import { cn } from '~/lib/utils';
import { useEffect } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      LinkExtension.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline',
        },
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'prose prose-sm dark:prose-invert max-w-none focus:outline-none min-h-[150px] px-3 py-2',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Sync external value changes (optional, but good for initial load)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="bg-background rounded-md border">
      {/* Toolbar */}
      <div className="bg-muted/40 flex flex-wrap gap-1 border-b p-1">
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')}>
          <Bold className="h-4 w-4" />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')}>
          <Italic className="h-4 w-4" />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')}>
          <Strikethrough className="h-4 w-4" />
        </ToolbarBtn>
        <div className="bg-border mx-1 h-6 w-px self-center" />
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
        >
          <List className="h-4 w-4" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
        >
          <ListOrdered className="h-4 w-4" />
        </ToolbarBtn>
      </div>

      {/* Editor Area */}
      <EditorContent editor={editor} />
    </div>
  );
}

// Simple button helper
function ToolbarBtn({ onClick, isActive, children }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('hover:bg-muted rounded-sm p-1.5 transition-colors', isActive && 'bg-muted text-primary')}
    >
      {children}
    </button>
  );
}
