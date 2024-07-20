
import './App.css';
import * as React from 'react'
import Login from './components/Login/Login.jsx';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <div>
        <Login/>
      </div>
    </ChakraProvider>
  );
}

export default App;
