import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skill from './components/Skill';
import Soft from './components/Soft';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

import { useParams } from 'react-router';

function App() {
	return (
		<Router>
			<div className="container">
				<Header />
				
				<Main />
				<About />
				<Skill />
				<Soft />
				<Education />
				<Experience />
				<Projects />
				<Switch>
				<Route path="/certify" exact component={Certificate} />
				</Switch>
				<Contact />
				

				
			</div>
		</Router>
	);
}

export default App;
