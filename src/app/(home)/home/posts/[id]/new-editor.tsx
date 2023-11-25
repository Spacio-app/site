'use client'

import { EditorState, RichUtils, convertFromRaw } from 'draft-js'
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

  // const handleKeyCommand = (command: string) => {
  //   console.log('COMMAND', command)
  //   const newState = RichUtils.handleKeyCommand(editorState, command)
  //   if (newState) {
  //     setEditorState(newState)
  //     return true
  //   }
  //   return false
  // }

  // FOR INLINE STYLES
  const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 24,
      padding: 6
    },
    HIGHLIGHT: {
      backgroundColor: '#F7A5F7'
    },
    UPPERCASE: {
      textTransform: 'uppercase'
    },
    LOWERCASE: {
      textTransform: 'lowercase'
    },
    CODEBLOCK: {
      fontFamily: '"fira-code", "monospace"',
      fontSize: 'inherit',
      background: '#F5F5F5',
      lineHeight: 3,
      padding: '0.8rem 0.8rem',
      borderRadius: ' 0.4rem'
    },
    SUPERSCRIPT: {
      verticalAlign: 'super',
      fontSize: '80%'
    },
    SUBSCRIPT: {
      verticalAlign: 'sub',
      fontSize: '80%'
    }
  }

  // FOR BLOCK LEVEL STYLES(Returns CSS Class From DraftEditor.css)
  const myBlockStyleFn = (contentBlock: any) => {
    const type = contentBlock.getType()
    switch (type) {
      case 'blockQuote':
        return 'superFancyBlockquote'
      case 'leftAlign':
        return 'leftAlign'
      case 'rightAlign':
        return 'rightAlign'
      case 'centerAlign':
        return 'centerAlign'
      case 'justifyAlign':
        return 'justifyAlign'
      default:
        break
    }
  }

  return (
    <Editor
        blockStyleFn={myBlockStyleFn as any}
        customStyleMap={styleMap as any}
        editorState={EditorState.createWithContent(convertFromRaw({ blocks, entityMap }))}
        onChange={() => {}}
        readOnly={true}
        plugins={[imagePlugin]}
    />
  )
}

export default NewEditor
