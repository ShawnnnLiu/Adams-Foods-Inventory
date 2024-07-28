import React from 'react';
import {Textarea, Box, Input, VStack, Stack, Flex, Center, Text, InputGroup, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react';
import {FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react'
import Navbar from './Navbar';


const Homescreen = () => {
    return (
      <>
      <Navbar />
      <Flex width="100vw" height="100vh" alignItems="center" justifyContent="space-between" bg="lightblue" pt="60px" >
        <Flex bg="lightblue" width="80%" height="90%"  margin="10px" border='1px' direction='column' justifyContent='center' alignItems='center'>
          <FormControl >
            <VStack spacing={2} alignItems="center">
              <Box width="90%">
                <FormLabel marginTop='5px' marginBottom='5px'>Input</FormLabel>
                <Input bg='white' width="100%" type="input1" />
              </Box>
              <Box width="90%">
                <FormLabel marginTop='1px'>Input</FormLabel>
                <Input bg='white' width="100%" type="input2" />
              </Box>
              <Box width="90%">
                <FormLabel>Input</FormLabel>
                <Input bg='white' width="100%" type="input3" />
              </Box>
              <Box width="90%">
                <FormLabel>Input</FormLabel>
                <Input bg='white' width="100%" type="input4" />
              </Box>
              <Box width="90%">
                <FormLabel>Input</FormLabel>
                <Input bg='white' width="100%" type="input5" />
              </Box>
            </VStack>
          </FormControl>

          <Flex alignItems="center" >
            <Button bg="white" margin="20px">Find</Button>
            <Button bg="white" margin="20px">Update/Submit</Button>
            <Button bg="white" margin="20px">Delete</Button>
          </Flex>

        </Flex>

        <Flex bg="lightblue" width="80%" height="85%" margin="10px" border='1px'></Flex>
      </Flex>
    </>
    );
  }
  
  export default Homescreen;