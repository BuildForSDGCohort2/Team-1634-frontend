import React from 'react';
import './App.css';
import { CircleToBlockLoading } from 'react-loadingg';
import LoadingScreen from 'react-loading-screen';
import Logo from './Images/logo.png';
import NavBar from './components/NavBar';



function App() {
  return (
 //...
<LoadingScreen
loading={CircleToBlockLoading}
bgColor='blue'
spinnerColor='#9ee5f8'
textColor='#676767'
logoSrc={Logo}
text=''
> 

// ...
// here loadable content
// for example, async data
  //<div></div>
</LoadingScreen>
  );
}

export default App;
