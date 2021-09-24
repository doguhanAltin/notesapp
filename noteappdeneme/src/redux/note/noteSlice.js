import { createSlice } from "@reduxjs/toolkit";

export  const noteSlice = createSlice(

    {
        name:"note",
        initialState:{
            items : [{id:"1",note:"deneme1",color:"blue"},
                   {id:"2",note:"deneme2",color:"red"},
                   {id:"3",note:"deneme3",color:"green"},
                   {id:"4",note:"deneme4",color:"blue"},],
            filteredItems:  [{id:"1",note:"deneme1",color:"blue"},
                             {id:"2",note:"deneme2",color:"red"},
                             {id:"3",note:"deneme3",color:"green"},
                             {id:"4",note:"deneme4",color:"blue"},],
        },
        reducers:{
            addNote:(state,action)=>{
                const {id,note,color}= action.payload
                state.items.push({id:id,note:note,color:color})
                state.filteredItems.push({id:id,note:note,color:color})
            },
            searchNote: (state,action)=>{
                const searchKey= action.payload;
                console.log(searchKey)
                state.filteredItems=state.items.filter((item)=>item.note.includes(searchKey))

            }
        }
    }
)

export default noteSlice.reducer;
export const {addNote,searchNote} = noteSlice.actions