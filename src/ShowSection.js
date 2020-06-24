import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function ShowSection(props) {
	if (props.section === 'about') {
		return <About />;
	} else if (props.section === 'projects') {
		return <Projects />;
	} else if (props.section === 'contact') {
		return <Contact />;
	}
}

export default ShowSection;
