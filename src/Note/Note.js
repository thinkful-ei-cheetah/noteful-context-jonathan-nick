import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'
import NoteContext from '../NoteContext/NoteContext';

export default function Note(props) {

  const deleteApiCall = (deleteNote) => {

    fetch(`http://localhost:9090/notes/${props.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    }).then((res) => {
        if (res.ok) {
          deleteNote(props.id)
          props.history.push('/')
        } else {
          console.log('error when attempting to delete note')
        } 
    })
  }

  return (
    <NoteContext.Consumer>
      { ({deleteNote}) => (
    <div className='Note'>
      <h2 className='Note__title'>
        <Link to={`/note/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <button className='Note__delete' type='button' onClick={() => deleteApiCall(deleteNote)} >
        <FontAwesomeIcon icon='trash-alt' />
       
        remove
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
  }
  </NoteContext.Consumer>
)
}

