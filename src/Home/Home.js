import React from 'react';
import './home.css';
import Abcd from '../assets/protect.jpg'
import Pqrs from '../assets/symptoms.jpg'

function Home() {
  return (
  <div className = "container-home">
		<div className = "intro">
			<h3 className='intro-content'>
			Since December 2019, the world has been in the grip of a contagious virus.<br /><br />
			It was first identified in the city of Wuhan, in China's Hubei province. In the past 10 months, this<br />
			virus has infected over 37 million people, and is responsible for over 1 million deaths globally.<br /><br />
			<b>Indeed, it is a watershed for humanity itself, and there is no turning back.</b><br />
        </h3>
		</div>

		<div>
			<h1 className='protect-overselves'>How do we protect ourselves?</h1>
		<img src = {Abcd} className = "protect_img" />
		</div>
		<div>
		<img src = {Pqrs} className = "symptoms_img" />
		</div>
	</div>
  );
}

export default Home;
