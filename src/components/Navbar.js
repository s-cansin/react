import { useState } from 'react';

const Navbar = ({ title }) => {


	const [count, setCount] = useState(0);

	//setInterval(() => {
	//	setCount(count+1);
	//}, 1000)

	return (
		<nav>
		{title}
		<br />
		<div onClick={() => setCount(count+1)}>Count: {count}</div>
		</nav>
	)
};

export default Navbar;

