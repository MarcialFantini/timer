import React, { useEffect, useState } from 'react'

import './style.css'

interface props{
  color:string
  
  item:string,
 
}


export const Card = (props:props) => {
  const [state,setState] = useState({
    hour:0,
    décimaMinuto:0,
    minute:0,
    décima:0,
    seconds:0
  
  })
  const [active,setActive] = useState(false)
  const addSecond = ()=>{
    const update = {...state}
    update.seconds = update.seconds + 1

    if(update.seconds ===10){
      update.décima = update.décima+1
      update.seconds = 0
    }
    if(update.décima === 6){
      update.décima = 0
      update.minute = state.minute +1
    }
    if(update.minute === 10){
      update.décimaMinuto = state.décimaMinuto +1
      update.minute = 0
    }
    if(update.décimaMinuto === 6){
      update.hour = update.hour+1
      update.décimaMinuto = 0
    }
    if(update.décimaMinuto ===10){

    }
    setState(update)
    console.log(update)
  }

  const activeToggle = ()=>{
    setActive(!active)
  }

  useEffect(()=>{
    if(active){
      setTimeout(()=>{
        addSecond()
      },1000)
    }
  
  },[active,state])

  return (
    <div
    style={{background:props.color}}
    className='cardContainer'
    >
      <div 
      onClick={activeToggle}
      className='btnStart'>
        <div className={active?"select activeSelect":"select"}>
          <img src="https://connectingclues.es/wp-content/uploads/2019/09/white-play-icon-png-7.png" alt="" />
          <img src="https://img.icons8.com/ios/500/pause--v1.png" alt="" />
        </div>
      </div>
      <div className="dataCard">
        <p>{props.item}</p>
        <h1>{  state.hour+":"+state.décimaMinuto+""+state.minute+ ":" + state.décima +"" + state.seconds}</h1>
      </div>
    </div>
  )
}
