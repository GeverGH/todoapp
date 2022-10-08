import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import AddNew from './Pages/AddNew'
import Home from './Pages/Home';
import Background from './assets/images/Background2.webp'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Background})`}}>
      <nav className="ui menu">
        <NavLink className="item" to="/">Home Page</NavLink>
        <NavLink className="item" to="/tasks">Add New Task</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/tasks" element={<AddNew/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
