import React from 'react';
import './App.css';
import im from './im/e.jpg'

function App() {
 
  return (
    
    <div className="App">
     
      <header className="App-header">
         <h1>Cartoon Book </h1>
        
      </header>
      <body className="App-body">
      <img src={im} alt='Avatar photo' width="500px" /> <br/>
      </body>

      <footer className="App-link">
    <p> หมายเหตุ กรุณาติดต่อ</p>

  </footer>   
    </div>
  );
  
}



export default App;
