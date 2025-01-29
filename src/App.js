import './App.css';
import React, {useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =()=>{
  const pageSize=5;
  const apikey = process.env.REACT_APP_API;
const [progress, setProgress] = useState(0)

 
    return (
      <div>
       <Router basename="/Newscaster_app">

     
        <Navbar/>
        <LoadingBar
        color="#f11946"
        height={3.1}
        progress={progress}

        
      />
        <Routes>
          {/* <Route path="/" element={<Navigate to="/sports" />} /> */}
        <Route path="/"element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="us" category="business" />}/>
            <Route  path="/business" element={<News setProgress={setProgress} apikey={apikey}  key='business'pageSize={pageSize}country='us' category="business"/>} />
             <Route  path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  key='entertainment' pageSize={pageSize}country='us' category="entertainment"/>} />
             <Route  path="/general"element={ <News setProgress={setProgress} apikey={apikey}  key='general' pageSize={pageSize}country='us' category="general"/>} />
             <Route  path="/health"element={<News setProgress={setProgress} apikey={apikey}  key='health' pageSize={pageSize}country='us' category="health"/>} />
              <Route  path="/science" element={<News setProgress={setProgress} apikey={apikey}  key='science' pageSize={pageSize}country='us' category="science"/>} />
              <Route  path="/sports"element={ <News setProgress={setProgress} apikey={apikey}  key='sports' pageSize={pageSize}country='us' category="sports"/>} />
               <Route  path="/technology"element={ <News setProgress={setProgress} apikey={apikey}  key='technology' pageSize={pageSize}country='us' category="technology"/>} />
        </Routes>
        </Router>

      </div>
    )
  }
export default App;



// import './App.css';
// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

// const App = () => {
//   const pageSize = 5;
//   const apikey = process.env.REACT_APP_API;
//   const [progress, setProgress] = useState(0);
//   const [category, setCategory] = useState("sports");  // Set default category here

//   // Ensure default category is used when the app loads
//   useEffect(() => {
//     setCategory("sports");  // Set default category for first load
//   }, []);

//   return (
//     <div>
//       <Router>
//         <Navbar setCategory={setCategory} />  {/* Pass setCategory to Navbar */}
//         <LoadingBar
//           color="#f11946"
//           height={3.1}
//           progress={progress}
//         />
//         <Routes>
//           {/* Default Route will use the category state */}
//           <Route
//             path="/"
//             element={<News setProgress={setProgress} apikey={apikey} key={category} pageSize={pageSize} country="us" category={category} />}
//           />
//           {/* Define other routes similarly */}
//           <Route
//             path="/business"
//             element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="us" category="business" />}
//           />
//           <Route
//             path="/entertainment"
//             element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />}
//           />
//           <Route
//             path="/general"
//             element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="us" category="general" />}
//           />
//           <Route
//             path="/health"
//             element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="us" category="health" />}
//           />
//           <Route
//             path="/science"
//             element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="us" category="science" />}
//           />
//           <Route
//             path="/sports"
//             element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="us" category="sports" />}
//           />
//           <Route
//             path="/technology"
//             element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="us" category="technology" />}
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
