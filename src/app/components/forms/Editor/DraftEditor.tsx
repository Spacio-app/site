'use client'
import { useEffect, useRef, useState } from 'react'
import {
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from 'draft-js'

import Editor from '@draft-js-plugins/editor'
import '@draft-js-plugins/static-toolbar/lib/plugin.css'
import createImagePlugin from '@draft-js-plugins/image'

// import Toolbar from './Toolbar'
import 'draft-js/dist/Draft.css'
import '@draft-js-plugins/image/lib/plugin.css'
import './DraftEditor.css'
import createToolbarPlugin from '@draft-js-plugins/static-toolbar'
import Toolbar from './Toolbar'
// import ImageAdd from './AddImage'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const DraftEditor = ({ setPostData, editorState, setEditorState }: {
  setPostData: any
  editorState: any
  setEditorState: any
}) => {
  const imagePlugin = createImagePlugin()
  const [urlImage, setUrlImage] = useState('')
  const [modal, setModal] = useState(false)
  const editor = useRef(null)

  useEffect(() => {
    focusEditor()
  }, [])

  const focusEditor = () => {
    console.log('FOCUS')
    if (editor.current) {
      (editor.current as any).focus()
    }
  }

  const handleKeyCommand = (command: string) => {
    console.log('COMMAND', command)
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return true
    }
    return false
  }

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

  const toolbarPlugin = createToolbarPlugin()
  // const { Toolbar } = toolbarPlugin
  const { addImage } = imagePlugin

  const plugins = [toolbarPlugin, imagePlugin]

  const insertImage = () => {
    // input in alert box to get image url
    setModal(false)
    const newState = addImage(editorState, urlImage, {})
    // setEditorState(newState);  does not seems to work all time, use settimeout
    setTimeout(setEditorState, 0, newState)
  }
  return (
    <div className="editor-wrapper" onClick={focusEditor}>
      <Toolbar editorState={editorState} setEditorState={setEditorState} />
      {/* <Toolbar /> */}
      <div className="w-full mx-auto editor-container">
        <Editor
          ref={editor}
          placeholder="Escribe algo..."
          handleKeyCommand={handleKeyCommand as any}
          editorState={editorState}
          blockStyleFn={myBlockStyleFn as any}
          customStyleMap={styleMap as any}
          onChange={(editorState: any) => {
            // const contentState = editorState.getCurrentContent()
            // console.log(convertToRaw(contentState))
            setPostData(convertToRaw(editorState.getCurrentContent()))
            setEditorState(editorState)
          }}
          plugins={plugins}
        />
      </div>
      <Dialog open={modal} onOpenChange={setModal}>
        <DialogTrigger className='mt-5 bg-gray-300 rounded p-3'>Agregar Imagen</DialogTrigger>
        <DialogContent>
          <DialogHeader className='flex flex-col gap-4'>
            <DialogTitle>Ingresa URL de la imagen</DialogTitle>
            <input
              type="text"
              className='border border-gray-300 rounded p-2 w-full'
              onChange={(e) => { setUrlImage(e.target.value) }}
            />
          </DialogHeader>
          <DialogDescription>
            <button onClick={insertImage} disabled={urlImage === ''} className='bg-[#037AF6] text-white text-md rounded p-3'>Agregar imagen</button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
      {/* <ImageAdd
          editorState={editorState}
          onChange={setEditorState}
          modifier={imagePlugin.addImage}
      /> */}
    </div>
  )
}

export default DraftEditor
