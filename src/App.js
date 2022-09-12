import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import OnGoing from './components/OnGoing';
import Recent from './components/Recent';
import Socials from './components/Socials';
import Top from './components/Top';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Socials />
      <Top />
      <Recent />
      <OnGoing />
      <Contact />
    </div>
  );
}

export default App;
