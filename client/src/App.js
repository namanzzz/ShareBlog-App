
import { Home } from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import {Single} from "./pages/single/Single";
import {Write} from "./pages/write/Write";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";


import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Routes } from "react-router-dom";
import Post from "./components/post/Post";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";


function App() {

  const {user} = useContext(Context);

  return (
    <Router>
      <Topbar />
        <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>

        <Route path="/register" element=
        {user ? <Home /> : <Register/>}></Route>

        <Route path="/login" element={
        user ? <Home /> : <Login />}></Route>
        
        <Route path="/write" element={ user ? <Write /> : <Register />}></Route>

        <Route path="/about" element={ <About /> }></Route>


        <Route path="/post/:postId" element
         = {<Single />}
        >
          
        </Route>
        
        
        </Routes>
          
    </Router>
   
  );
}

export default App;
