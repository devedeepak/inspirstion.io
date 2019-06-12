import React from 'react';
import Header from './Component/Header'
import Content from './Component/Content'
import './style.css'

class App extends React.Component{
  render(){
    return( 
      <div className="app">
         <Header /> 
         <Content />  
      </div>
    )
  }
}


export default App;