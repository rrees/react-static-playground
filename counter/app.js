import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Counter(props) {

	const [count, setCount] = useState(props.initialValue || 0);

	function inc() {
		setCount(count + 1);
	}

	function dec() {
		setCount(count - 1);
	}

	return (
		<>
		<p>Count: {count}</p>
		<div>
		<button onClick={inc}>Inc</button>
		<button onClick={dec}>Dec</button>
		</div>
		</>
	);
}

function CounterPage() {
	return (
		<div className="counter-container">
		<Counter initialValue={0} />
		<Counter initialValue={5} />
		</div>
	);
}

document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(<CounterPage />, document.getElementById('app'))});