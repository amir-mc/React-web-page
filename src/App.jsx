

import { useEffect, useReducer, useState } from "react";
import List from "./components/list";
import Search from "./components/search";

import useStateStor from "./hooks/useStoragestate";

const title = {
  number:'hello',
  titlee:'act pages'
};

const storyReduser=(state,action)=>{
  switch (action.type) {
    case 'SET_STOR_FETCH':
      return {...state,isLoding:true,isErorr:false
      }
      case 'SET_STOR_SUCSSES':
      return {...state,isLoding:false,isErorr:false,data:action.payload
      }
      case 'SET_STOR_ERROR':
      return {...state,isLoding:false,isErorr:true
      }


      case 'REMOVE_STOR':
      return {...state,
         data: state.data.filter((stor)=> stor.id !== action.payload),    }
    default:
      return state
  }
}

const App = () => {

 
  const [stories , dipacthStor]=useReducer(storyReduser,{
    data:[], isLoding:false , isErorr:false
  })
  //const [stories , Setsories]=useState([])
  
  
  const [searchTerm , updateSerach]=useStateStor('search','')

  const API='https://react-mini-projects-api.classbon.com/story/list';

  useEffect(()=>{
      if(!searchTerm) return;

    dipacthStor({type:'SET_STOR_FETCH'})
    fetch(`${API}?query=${searchTerm}`).then((response)=>response.json()).then((stories)=>{
      dipacthStor({type:'SET_STOR_SUCSSES' , payload: stories})

    })
    .catch(()=>dipacthStor({type:'SET_STOR_ERROR'}))
    
  },[searchTerm])

    const HandelRemov=(id)=>{ 
      dipacthStor({type:'REMOVE_STOR' ,payload:id })
    }

  //const serachStory =stories.data.filter((stor)=>stor.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  
  
  const handelBack = (event) =>{  
    updateSerach(event.target.value)
 
  }
   

return (
  <div>
  <h1>
   {title.number} {title.titlee}
  </h1>

{
  stories.isErorr && (<p>ERRRRRROR</p>)
}

 {
  stories.isLoding ?(<p> lodingg </p>):
  (<Search type="text" id="Search" value="search" label="search" seaechs={handelBack} titleSearch={searchTerm} autoFo/>)
 }
  
  <List list={stories.data}  HandelRemo={HandelRemov}/>

  <span>
    
  </span>
  </div>
)
 
}
 



export default App
