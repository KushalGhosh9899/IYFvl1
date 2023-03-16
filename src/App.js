import './App.css';
import { BrowserRouter , Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About.jsx';
import Contact from './pages/Contact';

//This is the main file from where flow start
function App() {
  return (
    <div >
      <BrowserRouter> 
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
