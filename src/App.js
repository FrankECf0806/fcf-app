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

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to="/" className='link'>/</Link>
          <Link to="/home" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/shop" className='link'>Shop</Link>
        </nav>
        <Routes>
          <Route path='/' element={ <AllClasses/> }></Route>
          <Route path='/home' element={ <Home/> }></Route>
          <Route path='/about' element={ <About/> }></Route>
          <Route path='/shop' element={ <Shop/> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
