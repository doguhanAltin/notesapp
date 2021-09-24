import './App.css';
import { Flex } from '@chakra-ui/react';
import Content from './Components/Content';
import NoteList from './Components/NoteList';
import Header from './Components/Header';

function App() {
  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
    <Flex direction={'column'}>
    <Header/>

      <Content />
      <NoteList />
  
    </Flex>
  </Flex>
  );
}

export default App;
