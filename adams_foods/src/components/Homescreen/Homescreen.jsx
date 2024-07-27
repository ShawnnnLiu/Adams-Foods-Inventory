import React from 'react';
import {Textarea, Box, Input, Stack, Flex, Center, Text, InputGroup, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react';
import { EmailIcon, UnlockIcon, CheckIcon } from '@chakra-ui/icons'
import Navbar from './Navbar';

const Homescreen = () => {
    return (
      <>
      <Navbar />
      <Flex width="100vw" height="100vh" alignItems="center" justifyContent="space-between" bg="lightblue" pt="60px" >
        <Flex bg="lightblue" width="80%" height="90%" margin="10px" border='1px' direction='column' justifyContent='center' alignItems='center'>
          <Textarea placeholder='Here is a sample placeholder' bg='white' margin="5px" height="5%" width="93%" />
          <Textarea placeholder='Here is a sample placeholder' bg='white' margin="5px" height="5%" width="93%" />
          <Textarea placeholder='Here is a sample placeholder' bg='white' margin="5px" height="5%" width="93%" />
          <Textarea placeholder='Here is a sample placeholder' bg='white' margin="5px" height="5%" width="93%" />
            <Flex alignItems="center" >
              <Button bg="white" margin="20px">One</Button>
              <Button bg="white" margin="20px">Two</Button>
              <Button bg="white" margin="20px">Three</Button>
            </Flex>

        </Flex>

        <Flex bg="lightblue" width="80%" height="85%" margin="10px" border='1px'></Flex>
      </Flex>
    </>
    );
  }
  
  export default Homescreen;