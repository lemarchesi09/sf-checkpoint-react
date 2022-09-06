import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Form from './components/Form';
import { Routes, Route} from 'react-router-dom';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
