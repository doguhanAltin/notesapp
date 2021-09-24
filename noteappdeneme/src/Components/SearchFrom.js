import {Input , Center} from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import { searchNote } from '../redux/note/noteSlice';

function SearchFrom() {
  const dispatch = useDispatch();
    return (
        <div>
          <Center> <Input placeholder="Search" borderRadius={"5px"} size={"md"} width="200" onChange={(e)=>dispatch(searchNote(e.target.value))}/></Center>
        </div>
    )
}

export default SearchFrom
