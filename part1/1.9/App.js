import React, {useState} from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
	if (props.All === 0) {
		return (
			<div>
				<h1>Feedback Is Not Given</h1>
			</div>
		)
	} 
	
	return (
		<div>
			Good: {props.good}
			Neutral: {props.neutral}
			Bad: {props.bad}
			All: {props.All}
			Average: {props.average}
			Positive: {props.positive}
		</div>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	return (
		<div>
			<h1>Give Your Feedback</h1>
			<button onClick = {() => setGood(good + 1)}>Good</button>
			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
			<button onClick = {() => setBad(bad + 1)}>Bad</button>
			<br/>
			<h1>Statistics</h1>
			<Statistics 
				good={good} 
				neutral= {neutral} 
				bad= {bad} 
				All= {good + neutral + bad} 
				average= {(good - bad)/(good + neutral + bad)} 
				positive= {(good + neutral)/(good + neutral + bad)}
			/>
		</div>
	)
}

export default App;