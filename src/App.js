import './App.css';

import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App =() => {
  const pageSize=7;

  const [progress,setProgress] = useState(0)


  
    return (
      <div>
        <Router>
           <Navbar/>
           <LoadingBar
           height={3}
        color='#f11946'
        progress={progress}
      />

           <Routes>
            <Route path="/" element={<News setProgress={setProgress}   pageSize={pageSize} key="general" country="in" category="general"/>} />
            <Route path='/business' element={<News setProgress={setProgress}   pageSize={pageSize} key="business" country="in" category="business"/>}/>
            <Route path='/entertainment' element={<News setProgress={setProgress}   pageSize={pageSize} key="entertainment" country="in" category="entertainment"/>}/>
            <Route path="/general" element={<News setProgress={setProgress}   pageSize={pageSize} key="general" country="in" category="general"/>} />
            <Route path='/health' element={<News setProgress={setProgress}   pageSize={pageSize} key="health" country="in" category="health"/>}/>
            <Route path='/science' element={<News setProgress={setProgress}   pageSize={pageSize} key="science" country="in" category="science"/>}/>
            <Route path='/sports' element={<News setProgress={setProgress}   pageSize={pageSize} key="sports" country="in" category="sports"/>}/>
            <Route path='/technollgy' element={<News setProgress={setProgress}   pageSize={pageSize} key="technollgy" country="in" category="technollgy"/>}/>

        
        </Routes>
           </Router>
      </div>
    )
  }


export default App