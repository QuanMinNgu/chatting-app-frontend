import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import CommentOld from './CommentOld';
import './Room.css';
import io from 'socket.io-client';
const Room = () => {
    const {id,name} = useParams();

    const [comment,setComment] = useState([]);
    const content = useRef();
    const [socket,setSocket] = useState();
    useEffect(() => {
      const socket = io();
      socket.emit("joinRoom", {room:id,name});
      setSocket(socket);
      return () => {
        socket.close();
      }
    },[]);


    useEffect(() => {
      if(socket){
        socket.on("sendCommentToClient",data => {
            setComment([data,...comment])
        });
      }
      return () => {
        if(socket){
          socket.off("sendCommentToClient");
        }
      }
    },[socket,comment]);

    const handleCreateComent = () => {
      if(!content.current.value){
        return alert("Vui lòng nhập bình luận.");
      }
      socket.emit("createComment",{
        room:id,
        name,
        content:content.current.value
      })
    }
  return (
    <div className='room_container'>
      <div className='room_form'>
        <div className='old_comment'>
          {comment.map(item => (
            <CommentOld item={item}/>
          ))}
        </div>
        <div className='create_comment'>
          <div className='name_user'>
            <h1>{name}</h1>
          </div>
          <div className='user_comment'>
            <textarea ref={content} placeholder='Bình luận'/>
          </div>
          <div className='put_button'>
            <button onClick={handleCreateComent}>Đăng</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room