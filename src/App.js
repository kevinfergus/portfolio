import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import headshot from './Headshot.png';
import { Breadcrumbs, Button, BottomNavigation } from '@material-ui/core';
import About from './About';
import ShowSection from './ShowSection';

function App() {
	const buttonStyle = { fontSize: 45 };
	const [ section, setSection ] = useState('about');

	return (
		<div className="App">
			<header className="App-header">
				<Breadcrumbs style={{ fontSize: 50, position: 'fixed', top: 20 }}>
					<Button
						style={buttonStyle}
						onClick={() => {
							setSection('about');
						}}
					>
						About
					</Button>
					<Button
						style={buttonStyle}
						onClick={() => {
							setSection('projects');
						}}
					>
						Projects
					</Button>
					<Button
						style={buttonStyle}
						onClick={() => {
							setSection('contact');
						}}
					>
						Contact
					</Button>
				</Breadcrumbs>
				<ShowSection section={section} />
				<BottomNavigation>
					<a href="https://www.linkedin.com/in/kevin-fergus/" style={{ margin: 10 }}>
						LinkedIn
					</a>
					<a href="https://github.com/kevinfergus" style={{ margin: 10 }}>
						GitHub
					</a>
				</BottomNavigation>
			</header>
		</div>
	);
}

export default App;
