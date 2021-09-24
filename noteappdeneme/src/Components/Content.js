import React from 'react'
import {Box} from '@chakra-ui/react'
import Header from './Header'
import SearchFrom from './SearchFrom'
import NoteForm from './NoteForm'
function Content() {
    return (
        <Box height={"400px"} width={"800px"}  >
            <SearchFrom />
            <NoteForm />



        </Box>
    )
}

export default Content
