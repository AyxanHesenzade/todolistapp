import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Users from "./components/Pages/Users.jsx";
import User from "./components/Pages/User.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Naviqasiya menyusu */}
      <nav>
        <ul>
          <li><Link to="/">Ana Səhifə</Link></li>
          <li><Link to="/about">Haqqında</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={< Users/>}/>
        <Route path="/user/:id"  element={<User />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
