import { Component } from "react"
import { List } from "./ButtonList.styled"

export class ButtonList extends Component{
    render(){
    return <>
        <List>
        <li><button type="button" onClick={this.props.onGood}>Good</button></li>
        <li><button type="button" onClick={this.props.onNeutral}>Neutral</button></li>
        <li><button type="button" onClick={this.props.onBad}>Bad</button></li>
        </List>
        </>
    }
}