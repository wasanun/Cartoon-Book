import React from 'react';
import './App.css';
import im from './im/e.jpg'
import Item1 from './im/1.png'
import im1 from './im/3.jpg'
import im2 from './im/5.jpg'
import im3 from './im/2.jpg'
import im6 from './im/4.jpg'
import im4 from './im/6.jpg'
import im5 from './im/7.jpg'
import im7 from './im/8.jpg'
import Todo from './components/todo';


function App() {
 
  return (
    
    <div className="App">
     
      <header className="App-header">
         <h1>Cartoon Book </h1>
        
      </header>
      <body className="App-body">
       
     <p> <img src={im} alt='photo' width="120px" />&nbsp; &nbsp; 
     <img src={im4} alt='photo' width="100px" />    </p>
      <img src={im2} alt='photo' width="150px" />&nbsp; &nbsp;
      <img src={im3} alt='photo' width="150px" />&nbsp; &nbsp;
      <img src={im1} alt='photo' width="120px" /> <br/>
     <p> <img src={im5} alt='photo' width="120px" /> &nbsp; &nbsp;
     <img src={im6} alt='photo' width="120px" /> &nbsp; &nbsp;
     <img src={im7} alt='photo' width="120px" /> &nbsp; &nbsp;
      <img src={Item1} alt='photo' width="120px" /> </p>

    <div className = "App-todo">
      <Todo head="Todo" />

    </div>

      </body>


      <footer className="App-link">
    <p> 5935512043</p>

  </footer>   


    </div>
  );
  
}



export default App;
