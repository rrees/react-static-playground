import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Post(props) {

	return (
		<section>
		<header>
		<h2 className="subtitle">{props.heading}</h2>
		</header>
		{props.children}
		</section>
	);
}

function Page() {
	return (
		<Post heading="A new start">
			<p>Night is always darkest before the dawn.</p>
			<p>Hope is always weakest before it is <em>renewed</em>.</p>
		</Post>
	);
}

document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(<Page />, document.getElementById('app'))});