import React from 'react'
import './NoteTitle.css'

const NoteTitle = () => {
  return (
    <div className='note-title-container'>
      <h3 className='title'>タイトル</h3>
      <div className='note-title-content'>
        <div className='note-title'>ノートのタイトル</div>
        <div className='note-date'>2025/01/01</div>
        <div className='note-note'>ノートの内容</div>
      </div>
    </div>
  )
}

export default NoteTitle
