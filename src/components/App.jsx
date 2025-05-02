import { Component } from "react";
import { ButtonList } from "./ButtonList/ButtonList";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "../GlobalStyle";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onGood = () =>{
    this.setState((prevState)=>{
      return {good: prevState.good += 1}
    })

  }

  onNeutral = () =>{
    this.setState(prevState=>{
      return {neutral: prevState.neutral += 1}
    })

  }

  onBad = () =>{
    this.setState((prevState)=>{
      return {bad: prevState.bad += 1}
    })
  }

  render(){
    
    return<>
      <h1>Please leave feedback</h1>

      <ButtonList onGood={this.onGood} onNeutral={this.onNeutral} onBad={this.onBad}/>

      <h2>Statistics</h2>

      {this.state.good || this.state.neutral || this.state.bad ? <Statistics good={this.state.good} neutral={this.state.neutral}  bad={this.state.bad}/> : <Notification message="There is no feedback"/>}

      <GlobalStyle/>
    </>
  }
}