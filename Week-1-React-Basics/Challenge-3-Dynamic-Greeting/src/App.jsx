import { useState } from 'react'
import morningImg from './assets/morning.png';
import afternoonImg from './assets/afternoon.png';
import eveningImg from './assets/evening.png';
import nightImg from './assets/night.png';

import './App.css'
export default () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  function getMsg(hours, minutes) {
    let time = hours + minutes / 60;
    let currntMsg;
    let currntImg;
    if (time >= 0 && time < 11.5) {
      currntMsg = "Good Morning";
      currntImg = morningImg;
    } else if (time >= 11.5 && time < 15) {
      currntMsg = "Good Afternoon";
      currntImg = afternoonImg;
    } else if (time >= 15 && time <= 18) {
      currntMsg = "Good Evening";
      currntImg = eveningImg;
    } else {
      currntMsg = "Good Night";
      currntImg = nightImg;
    }
    return [currntMsg,currntImg];
  }
 
let [msg, setMsg] = useState(getMsg(hours, minutes)[0]);
let [img, setImg] = useState(getMsg(hours, minutes)[1]);

  function handleTimeChange(e) {
    let [h, m] = e.target.value.split(":");
    let [msg, img] = getMsg(Number(h), Number(m));
    setMsg(msg);
    setImg(img);
  }


  return <>
    <div className='vh-100 bg-theme'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="h-100 greetings-card">
              <div>
                <img className="img-fluid rounded-5" src={img} alt="img" />
              </div>
              <h4 className='fw-bold text-center my-3'>{msg}</h4>
              <div className='input-wrapper'>
                <input onChange={(e) => { handleTimeChange(e); }} type="time" name="time" id="time" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}