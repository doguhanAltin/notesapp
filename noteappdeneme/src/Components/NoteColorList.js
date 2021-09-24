import React from 'react'
import {Flex,Box} from '@chakra-ui/react'
import {useSelector } from 'react-redux'
function NoteColorList({color}) {
    const notes= useSelector((state)=>state.note.filteredItems)
    const filteredNotes = notes.filter((item)=> item.color===color);
    console.log(filteredNotes)
    return (
        
        <Flex w="22%" className="todo-column" flexDir="column" p="2" >
            {filteredNotes.map((item) =>(
              <Box key={item.id} minHeight="50"  maxHeight="200" bg={color}  paddingTop="3" marginTop="3"  px="2"  fontSize="sm" textOverflow={"ellipsis"} textAlign="center" >
                   {item.note} 
              </Box>
              
              ))}
         
      </Flex>
    )
}

export default NoteColorList
