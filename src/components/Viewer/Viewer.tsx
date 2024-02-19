'use client';

import React from 'react';
import { BlockNoteEditor } from '@blocknote/core';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import editorTheme from '../../utils/editorConfig';

interface IEditorProps {
  initialContent: any;
}

// Our <Editor> component we can reuse later
export default function Viewer({ initialContent }: IEditorProps) {
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    editable: false,
    initialContent: initialContent ? initialContent : undefined,
  });

  return <BlockNoteView editor={editor} theme={editorTheme} />;
}
