import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
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
    </div>
  );
}

export default App;
