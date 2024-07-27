import React from 'react';
import { Image, Box, Flex, Stack, HStack, Link, IconButton, useDisclosure, Drawer, Button, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, List } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const ShowDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px' >Basic Drawer</DrawerHeader>
        <Stack direction="column" spacing={4}>
            <Button bg='white' justifyContent="flex-start" >Show Map</Button>
            <Button bg='white' justifyContent="flex-start" >Some Content</Button>
            <Button bg='white' justifyContent="flex-start" >Upload File</Button>
        </Stack>

        <DrawerFooter justifyContent='center'>
          <Button bg='red.400'>Log Out</Button>
        </DrawerFooter>
      </DrawerContent>
      
    </Drawer>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={4} w="100%" position="fixed" top={0} zIndex={1}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>
            <Button onClick={onOpen} bg="white" color="black" p={2}>
              <HamburgerIcon w={6} h={6} />
            </Button>
          </Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }} justifyContent='center'>
            <Image src="AdamsWings.png" alt="Adams Wings" height='50px'/>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Link href="#" color="black" p={2}>Help</Link>
        </Flex>
      </Flex>
      <ShowDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;
