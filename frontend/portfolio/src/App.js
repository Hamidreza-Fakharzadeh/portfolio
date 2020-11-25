import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import About from './components/About';
import Skill from './components/Skill';
import Soft from "./components/Soft";
import Education from './components/Education';
import Experience from "./components/Experience";
import Projects from './components/Projects';

function App() {
	return (
		<div className="app-wrapper">
			<Header/>
			<Main/>
			<About/>
			<Skill/>
			<Soft/>
			<Education/>
			<Experience/>
			<Projects/>
		</div>
	);
}

export default App;
