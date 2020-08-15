### Config

```
$npm init
$npx create-react-app <name>
$npm start



```

### Displaying things
When you have multiple elements, put them in a single <div> tag

```
// app.js

class App extends React.Component {
  render() {
    return (
      <h1>Hello React</h1>
    );
  }
}

export default App;



```
When JSX is put between the symbols {/* and */}, the text inside becomes a comment. 

```
<img src=" "/>
```



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### JS and JSX 
* JSX is only written inside the return section of the render method

* JavaScript can be written outside the return section (but still inside the render method)

```
class App extends React.Component {
  render(){
    const text = 'Hello World';
    return (
      // put JSX here
    );
  }
}
```

* Putting JS Code inside JSX

```
render(){
  // comment 
  const text = 'Hello World';
  return (
    {/*comment  */}
    <div> {text} </div>
  );
}
```

## Click Events
To change what is displayed when someone clicks a button

* events
* state

### to Use Events
* template
```
<button eventName={
  ()=> {code}
  }></button>
```

```
  <button onClick={()=> {code}}>Master White</button>
```

* Using console.log() with an onClick Event
```
<button onClick={()=>{
  console.log('Master White')
}}>
</button>
```
### State
A value that changes depending on a user's actions is called state 

We can update the state whenever a button is pressed, then change which name is displayed based on the state.

* flow of displaying state changes 

1. define state
2. display state
3. update state

* define state
```
const user = {
  name: "Ken the Ninja",
  age:14
}

console.log(user.age);
```
```
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {name:'Ken the Ninja'};
  }
}
```
* display state
* app.js
```
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:'Ken the Ninja'}
  }
  render(){
    console.log(this.state)
    return(
      <h1>Hello, {this.state.name}!</h1>
    );
  }
}
```

* update state 
the value of state for the specified property changes
> this.setState({propertyName: valueToUpdate})

```
// This means values can be displayed with this.state.name can also be changed. To change the name displayed when a button is clicked, we'll put setState inside method for the onClick event

<h1>Hello, {this.state.name}!</h1>

<button onClick={() => {
  this.setState({name:'Master White'})
}}>Master White</button>

<button onClick={() => {
  this.setState({name:'Ken the Ninja'})
}}>Ken the Ninja</button>



```

### methods in classes

```
class className {
  constructor(){
    ...
  }

  methodName(){
    ...
  }
}
```
```
class App extends React.Component{
  handleClick(){

  }
}
```

Methods can also be called using events. The codeonClick={() => {this.methodName()}} will run the method with the name "methodName" (can be any name) in the App.js file when this component (the element containing the method itself) is clicked.

```
render(){
  return(
    <button onClick={()=>{this.handleClick()}}>
      Master White
    </button>
  )
}
```

passing arguments to methods 

```
class App extends React.Component

  handleClick(name){
    this.setState({name:name});
  }

  <button onClick={()=>{this.handleClick('Master White)}}>
  Master White
  </button>
  <button onClick={()=>{this.handleClick('Ken the Ninja')}}>
  Ken the Ninja
  </button>
```

* defining state

App.js
```
constructor(props){
  super(props);
  this.state = {count:0};
}
```

* display state

App.js
```
render(){
  return(
    <div>
      <h1>
        {this.state.count}
      </h1>
      <button>+</button>
    </div>
  )
}
```

* update state

```
handleClick(){
  this.setState({count:this.state.count + 1});
}
```

App.js
```
class App extends React.Component {

  handleClick(){
    this.setState({count:this.state.count + 1});
  }

  render(){
    return (
      <button onClick={() => {this.handleClick()}}>
      +
      </button>
    )
  }

}

```

### Displaying React

App.js -> index.js -> index.html
```
project
|_index.html
|_/src
|____|index.js
|____/components
|______________|App.js
```


App.js
```
class App extends React.Component {
  render(){
    return(
      <div>

      </div>
    );
  }
}

export default App;
```

index.js
```
import App from './components/App';
ReactDOM.render(<App/>, document.getElementById('root'));

```

### CSS in JSX 

```
render(){
  return (
    <div>
      <h1 className="">
      <p className="">
    </div>
  )
}
```