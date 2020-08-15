import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: 'Ken the Ninja'};
  }

  handleClick(name){
    this.setState({name:name});
  }
  
  render() {
    return (
    	<div>
    	  <h1>Hello, {this.state.name}!</h1>
    	  {/* Change the state for the onClick event */}
        {/* <button onClick={() => {this.setState({name:'Master White'})}}>Master White</button> */}

        <button onClick={() => {this.handleClick('Master White')}}>Master White</button>
        
        {/* Change the state for the onClick event */}
        <button onClick={() => {this.setState({name:'Ken the Ninja'})}}>Ken the Ninja</button>
        
      </div>
    );
  }
}

export default App;
