import { Component } from "react";
import { ButtonList } from "./ButtonList/ButtonList";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "../GlobalStyle";
import { useState } from "react";

export const App = ()=>{
  const [good, setGood] = useState(0)
  const [neutral, setneutral] = useState(0)
  const [bad, setBad] = useState(0)


  
  const onGood = () =>{
    setGood(prevState=>prevState += 1)

  }

  const onNeutral = () =>{
    setneutral(prevState=> prevState += 1)
  }

  const onBad = () =>{
    setBad(prevState=>prevState += 1)
  }

    
    return<>
      <h1>Please leave feedback</h1>

      <ButtonList onGood={onGood} onNeutral={onNeutral} onBad={onBad}/>

      <h2>Statistics</h2>

      {good || neutral || bad ? <Statistics good={good} neutral={neutral}  bad={bad}/> : <Notification message="There is no feedback"/>}

      <GlobalStyle/>
    </>
}