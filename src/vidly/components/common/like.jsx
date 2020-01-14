import React from 'react'

const Like = ({ liked, onClick }) => {
  return (
    <i
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      className={'fa fa-heart' + (!liked ? '-o' : '')}
      aria-hidden='true'
    />
  )
}

export default Like
