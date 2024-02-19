'use client';

import React from 'react';
import { BlockNoteEditor } from '@blocknote/core';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import editorTheme from '../../utils/editorConfig';
import { v4 as uuidv4 } from 'uuid';

interface IEditorProps {
  initialContent: any;
  updatePostContent: any;
  pageNum: number;
  subPageNum?: number | null;
}

export default function Editor({ initialContent, updatePostContent, pageNum, subPageNum }: IEditorProps) {
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange: (editor) => {
      updatePostContent(
        pageNum,
        subPageNum,
        null,
        editor.topLevelBlocks.map((block) => ({
          ...block,
          ...(block.id === 'initialBlockId' && { id: uuidv4() }),
        }))
      );
    },
    initialContent:
      Array.isArray(initialContent) && typeof initialContent[0] === 'object' ? (initialContent as any) : null,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={editorTheme} />;
}
