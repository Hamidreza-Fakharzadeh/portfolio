import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import About from './components/About';
import Skill from './components/Skill';
import Soft from "./components/Soft";
import Education from './components/Education';
import Experience from "./components/Experience";
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		
			<div className="container">
				<div className="container-flex">
				<Header/>
				<Main/>
				<About/>
				<Skill/>
				<Soft/>
				<Education/>
				<Experience/>
				<Projects/>
				<Contact/>
				</div>
				
			</div>
		
		
	);
}

export default App;
