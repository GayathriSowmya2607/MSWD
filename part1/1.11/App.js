import React, {useState} from "react";

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
			Good     {good}<br/>
			Neutral  {neutral}<br/>
			Bad      {bad}<br/>
			All      {good + neutral + bad}<br/>
			Average  {(good - bad)/(good + neutral + bad)}<br/>
			Positive {(good + neutral)/(good + neutral + bad)}%
		</div>
	)
}
export default App;