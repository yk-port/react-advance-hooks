import React from 'react'
import { DELETE_EVENT } from '../actions'

const Event = ({ event, dispatch }) => {
  const { id, title, body } = event
  const handleClickDeleteEvent = () => {
    const result = window.confirm(`${title}を削除してもよろしいですか？`)
    if (result) dispatch({ type: DELETE_EVENT, id })
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteEvent}>削除</button></td>
    </tr>
  )
}

export default Event