'use client'

import { EditorState, convertFromRaw } from 'draft-js'
import React from 'react'
import Editor from '@draft-js-plugins/editor'
import 'draft-js/dist/Draft.css'
import '@draft-js-plugins/image/lib/plugin.css'
import '@/components/forms/Editor/DraftEditor.css'
import createImagePlugin from '@draft-js-plugins/image'

const NewEditor = ({ blocks, entityMap }: any) => {
  console.log('Blocks:', blocks)
  console.log('EntityMap:', entityMap)
  const imagePlugin = createImagePlugin()
  return (
    <Editor
        editorState={EditorState.createWithContent(convertFromRaw({ blocks, entityMap }))}
        onChange={() => {}}
        readOnly={true}
        plugins={[imagePlugin]}
    />
  )
}

export default NewEditor
