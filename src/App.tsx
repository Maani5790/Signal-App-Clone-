import './App.css'
import { Box, Flex, Spacer,Heading,Button,ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      {/* <Flex justify='space-between'>
     <Box bg='red' h='100' w='100'>item 4</Box>
     <Box bg='blue' h='100' w='100'>item 2</Box>
     <Box bg='pink' h='100' w='100'>item 3</Box>
     <Box bg='orange' h='100' w='100'> item 4</Box>
     </Flex> */}
     <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Rehman App</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex>
{/* <HStack spacing='24px'>
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</HStack> */}
    </div>
    
  )
}

export default App
