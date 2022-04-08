import React from 'react'

const CommentOld = ({item}) => {
  return (
    <div className='old_comment_form'>
        <h1 className='name_user_old_comment'>{item.name} :</h1>
        <p className='comment_user_old_comment'>
            {item.comment}
        </p>
    </div>
  )
}

export default CommentOld