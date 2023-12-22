import {Routes, Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Policy from './components/pages/Policy';
import Pagenotfound from './components/pages/Pagenotfound';
import Register from './components/pages/Auth/Register';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
      </Routes>
    </>
  );
}

export default App;
