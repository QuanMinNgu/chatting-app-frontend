import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
const HomePage = () => {

    const nameRef = useRef();
    const navigate = useNavigate();

    const roomRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nameRef.current.value || !roomRef.current.value){
            return alert("Điền vào tất cả thông tin.");
        }
        if(nameRef.current.value.length > 10){
            return alert("Tên không dài quá 10 kí tự");
        }
        const user ={
            name:nameRef.current.value.trim().toString(),
            room:roomRef.current.value.trim().toString()
        }

        navigate(`/room/${user.name}/${user.room}`);    
    }
  return (
    <div className='home_form'>
        <div className='home_input'>
            <form onSubmit={handleSubmit }>
                <div className='name_input'>
                    <label>Nhập tên:</label>
                    <input ref={nameRef} type="text" placeholder='Nhập tên'/>
                </div>
                <div className='name_input'>
                    <label>Nhập tên phòng:</label>
                    <input ref={roomRef} type="text" placeholder='Nhập tên phòng'/>
                </div>
                <div className='button_in'>
                    <button type="submit">Vào Phòng</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default HomePage