import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import AllClasses from './Components/AllClasses';
import CondRenderingArrayMapping from './Components/CondRenderingArrayMapping';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to="/" className='link'>/</Link>
          <Link to="/home" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/shop" className='link'>Shop</Link>
          <Link to="/rendering-mapping" className='link'>Conditional Rendering & Array Mapping</Link>
        </nav>
        <Routes>
          <Route path='/' element={ <AllClasses/> }></Route>
          <Route path='/home' element={ <Home/> }></Route>
          <Route path='/about' element={ <About/> }></Route>
          <Route path='/shop' element={ <Shop/> }></Route>
          <Route path='/rendering-mapping' element={ <CondRenderingArrayMapping/> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
