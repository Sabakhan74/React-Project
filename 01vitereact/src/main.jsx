import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import Components from './Components.jsx'
//Its not work
/*
const reactElement ={
  type : 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to google'
  
}
*/

//Anothermethod and its work
/*
const AnotherElement = (
  <a href='https://google.com' target='_blank'> Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  AnotherElement
)
*/

const secondUserName = "SABA KHAN NIAZI"

const reactElement = React.createElement(
  'a',
  {href:'https://gooogle.com', target: '_blank'},
  'Click me to visit',
  secondUserName
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
    <App />
    <Components />

  </>
)
