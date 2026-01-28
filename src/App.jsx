import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App(){

    return(
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                    <Route path={'/'} element={<Home/>}></Route>
                    <Route path={'/home'} element={<Home/>}></Route>
                        <Route path={'*'} element={<div>404 not found</div>}></Route>
                        <Route path={'/About'} element={<About />}></Route>
                        <Route path={'/ContactUs'} element={<Contact />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>


        )

    }


export default App