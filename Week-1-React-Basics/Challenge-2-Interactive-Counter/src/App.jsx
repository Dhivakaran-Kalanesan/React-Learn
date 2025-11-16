import { useState } from "react";
import './App.css';

export default () => {
  let [count, setCount] = useState(0);
  function handleClickAdd() {
    setCount(count + 1);
    // console.log(count);
  }
  function handleClickSub() {
    setCount(count - 1);
    // console.log(count);
  }
  function handleClickReset() {
    setCount(0);
    // console.log(count);
  }
  function handleClickMass() {
    setCount(count + 100);
    // console.log(count);
  }
  return <>
    <div className="bg-theme vh-100">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="h-100">
              <div className="w-100 d-flex justify-content-center align-items-center">
                <button title="Add 100" className="btn-mass" onClick={handleClickMass}></button>
              </div>
              <div className="bar shadow">
                <div className="btn-wrapper"><button title="Subtract 1" onClick={handleClickSub} className="btn-action">-</button></div>
                <div className="circle shadow">
                  <h1>{count}</h1>
                </div>
                <div className="btn-wrapper"><button title="Add 1" onClick={handleClickAdd} className="btn-action">+</button></div>
              </div>
              <div className="w-100 d-flex justify-content-center align-items-center">
                <button title="Rest to 0" className="btn-reset" onClick={handleClickReset}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}