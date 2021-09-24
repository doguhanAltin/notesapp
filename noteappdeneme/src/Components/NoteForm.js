import {useState} from 'react'
import { Textarea,Center,Button,Box } from "@chakra-ui/react"
import {useDispatch} from "react-redux"
import { nanoid } from 'nanoid';
import { addNote } from '../redux/note/noteSlice';
function NoteForm() {
    const dispatch = useDispatch();
    const [color, setColor]=useState("blue");
    const [note,setNote]=useState("");
    return (
     <Box>
            <Center><Textarea  width={"100vh"} height={"200px"} marginTop={"20px"} onChange={(e)=>setNote(e.target.value)}  / > </Center> 
            <Box display={"flex"} marginTop={"10px"} marginLeft="5">
                                    <Button w="40px" h="40px" bg={"blue"} borderRadius={"100px"} marginLeft={"20px"} onClick={()=>setColor("blue")} / >                                   
                                    <Button w="40px" h="40px" bg={"red"} borderRadius={"100px"} marginLeft={"10px"} onClick={()=>setColor("red")}/ >
                                    <Button w="40px" h="40px" bg={"yellow"} borderRadius={"100px"} marginLeft={"10px"} onClick={()=>setColor("yellow")}/ >
                                   <Button  marginLeft={"auto"} marginRight={"40px"} colorScheme="green" onClick={()=>{dispatch(addNote({id:nanoid(),color:color,note:note}))}}> Add </Button>    
            </Box>
     
</Box>
    )
}

export default NoteForm
