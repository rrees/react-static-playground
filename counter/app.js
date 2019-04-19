import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Counter() {

	const [count, setCount] = useState(0);

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

document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(<Counter />, document.getElementById('app'))});