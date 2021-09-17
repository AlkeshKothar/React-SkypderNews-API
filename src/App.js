
import './App.css';
import Footer from './components/Footer';
import Heading from './components/Heading';
import NavBar from './components/NavBar'
import News from './components/News';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Heading/>
      <News/>
      <Footer/>
      
    </div>
  );
}

export default App;
