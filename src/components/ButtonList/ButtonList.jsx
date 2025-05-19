import { Component } from "react"
import { List } from "./ButtonList.styled"

export const ButtonList = ({onGood, onNeutral, onBad})=>{
    return <>
        <List>
        <li><button type="button" onClick={onGood}>Good</button></li>
        <li><button type="button" onClick={onNeutral}>Neutral</button></li>
        <li><button type="button" onClick={onBad}>Bad</button></li>
        </List>
        </>

}