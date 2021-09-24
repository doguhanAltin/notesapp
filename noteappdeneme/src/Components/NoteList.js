import {  Flex } from '@chakra-ui/layout'
import React from 'react'
import NoteColorList from './NoteColorList'

function NoteList() {

    return (
<Flex w="%80" justifyContent="space-evenly" bg="blackAlpha.50">
<NoteColorList color="blue"></NoteColorList>
<NoteColorList color="red"></NoteColorList>
<NoteColorList color="yellow"></NoteColorList>

</Flex>
    
    )
}

export default NoteList