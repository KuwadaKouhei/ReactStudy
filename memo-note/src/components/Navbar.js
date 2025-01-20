import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div></div>
        <h1 className='title'>ノート 一覧</h1>
        <button className="btn"><FontAwesomeIcon icon={faPlus} />ノート作成</button>
      </div>
    </div>
  )
}

export default Navbar
