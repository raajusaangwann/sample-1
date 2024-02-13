import React from "react";
export default function Debouncing(){
const handleChange = e => {
    console.log('api call...')
  }
  function debounce(fn,delay){
    let timer
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(()=> fn(...args),delay);

    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Search  </p>
        <input type='text' onChange={debounce(handleChange,500)} />
      </header>
    </div>
  );
}

