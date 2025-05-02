import { Component } from "react";

export const Statistics = ({good, neutral, bad}) => {
        let total = 0
        total = good + neutral + bad

        let positivePercent = 0
        positivePercent = Math.round((good / total) * 100)

        return <ul>
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                <p>Bad: {bad}</p>
            </li>
            <li>
                <p>Total: {total}</p>
            </li>
            <li>
            {positivePercent > 0 ? 
                <p>Positive feedback: {positivePercent}%</p> :  <p>Positive feedback: 0%</p>}
             </li>
        </ul>
}