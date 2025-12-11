import type { ComponentConfig } from '@measured/puck';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const RichTipTap: ComponentConfig<any> = {
  label: 'Rich Text (TipTap)',

  fields: {
    content: { type: 'textarea', label: 'HTML', contentEditable: false },
  },

  defaultProps: {
    content: '<p>Hello world</p>',
  },

  render: ({ content, puck }) => {
    const editor = useEditor({
      extensions: [StarterKit],
      content,
      onUpdate({ editor }) {
        puck.setProp('content', editor.getHTML());
      },
    });

    return (
      <div className="prose max-w-none">
        <EditorContent editor={editor} />
      </div>
    );
  },
};
