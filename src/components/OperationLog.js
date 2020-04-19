import React from 'react'

const OperationLog = ({ log }) => {
  const { description, operatedAdd } = log
  return (
    <tr>
      <td>{description}</td>
      <td>{operatedAdd}</td>
    </tr>
  )
}

export default OperationLog
