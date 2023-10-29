'use client'

import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

interface ShareButtonProps {
  url: string
  text?: string
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, text = 'Compartir' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Compartir enlace',
          text,
          url
        })
      } catch (error) {
        console.error('Error al compartir:', error)
      }
    } else {
      console.warn('La función de compartir no está disponible en este navegador.')
    }
  }

  return (
    <div className="">
      <CopyToClipboard text={url} onCopy={handleCopy}>
        <button className="font-semibold text-sm p-2 rounded-xl hover:bg-slate-200">
          {copied ? 'Enlace Copiado' : text}
        </button>
      </CopyToClipboard>
    </div>
  )
}

export default ShareButton
