import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Login.css'
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function Login() {
    const [pin, setPin] = useState('')
    const [roomNum, setRoomNum] = useState('')

    const handleChangePin = (event) => {
        setPin(event.target.value);
      }   
      
     const handleChangeNum = (event) => {
        setRoomNum(event.target.value);
      }

    const PinInputTag = () => {
        return (
            <input type='password' 
            placeholder='PIN'
            onChange={handleChangePin} 
            value={pin}
            />
        )
    }

    
    let history = useHistory();
    
    const RoomInputTag = () => {
        return (
            <input type='text'
             placeholder='Room number' 
             onChange={handleChangeNum} 
             value={roomNum}
            />
        )
    }

    function handleClick() {
        history.push("/Home");
      }

    const SendData = () => {
        var bodyFormData = new FormData();
        bodyFormData.append(pin, roomNum);
        
        // Axios({
        //     method: "post",
        //     url: "http://192.168.88.24:8000/api/v1/room/login/",
        //     data: bodyFormData,
        //     headers: { "Content-Type": "application/json",
        //                 'Accept': 'application/json', }
        //   })
        //     .then(function (response) {

        //       console.log(response);
        //     })
        //     .catch(function (error) {
        //       //handle error
        //       console.log(error);
        //     });

        let obj = {
            username: roomNum,
            password: pin
        }
        let response = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
          };

        fetch("http://192.168.88.24:8000/api/v1/room/login/", response)
        .then(res => {
            if(res.ok){
                console.log(res.status);
                handleClick();
            } else{

            console.log(res.status)
            }
        }
        )
console.log(response)
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://gardenhotel.kg/static/img/logo.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>PIN code</h5>
                    <PinInputTag />

                    <h5>Room number</h5>
                    <RoomInputTag />

                    <button type='button' onClick={SendData} className='login__signInButton'>Sign In</button>
                </form>
            </div>
            <div className='footer'>
                    
            </div>
        </div>
        )
    }
    
export default Login
