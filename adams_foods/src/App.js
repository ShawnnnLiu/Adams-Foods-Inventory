
import './App.css';
import * as React from 'react'
//import Login from './components/Login/Login.jsx';
import Homescreen from './components/Homescreen/Homescreen.jsx';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <div>
        <Homescreen/>
      </div>
    </ChakraProvider>
  );
}

export default App;
