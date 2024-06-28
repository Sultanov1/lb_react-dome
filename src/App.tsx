import Home from './containers/Home/Home';
import Contacts from './containers/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import {Route, Routes} from 'react-router-dom';

const App = () => (
  <>
    <header>
      <Navbar/>
    </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
  </>
);

export default App;
