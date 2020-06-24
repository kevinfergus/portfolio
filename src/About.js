import React from 'react';
import headshot from './Headshot.png';

function About() {
	return (
		<div>
			<img src={headshot} alt="logo" className="headshot" />
			<p>Hi! I'm Kevin</p>
			<p>I'm a full stack web developer based in Chicago</p>
		</div>
	);
}

export default About;
