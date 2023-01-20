import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Topbar from './component/Topbar/TopBar';
import Intro from './component/Introduction/Intro';
import Experience from './component/Experiance/Expe';
import Project from './component/Project/Project';
import Contact from './component/ContactPage/Contact';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Topbar></Topbar>
     <Intro></Intro>
     <Experience></Experience>
     <Project></Project>
     <Contact></Contact>
    </div>
  );
}

export default App;
