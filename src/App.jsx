

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

  const storItem = [
    {
    id: 1,
    name:'alii',
    title:'react pages',
    number:55,
    skill:20,
    URL:'HTTPS://z.com'
  },
  {
    id: 2,
    name:'javad',
    title:'laravel pages',
    number:33,
    skill:18,
    URL:'HTTPS://x.com'
  }
  

  ];
  const [stories , dipacthStor]=useReducer(storyReduser,{
    data:[], isLoding:false , isErorr:false
  })
  const [searchTerm , updateSerach]=useStateStor('search','')

  const sYncpromise =()=>
    new Promise((resolve)=>{
    setTimeout(() => {
     resolve({data:{stories:storItem}})
    // reject()
    }, 2000 );
  })  

  useEffect(()=>{
    dipacthStor({type:'SET_STOR_FETCH'})
      sYncpromise().then(result=>{
        dipacthStor({type:'SET_STOR_SUCSSES' , payload: result.data.stories})
      
      }).catch(()=>dipacthStor({type:'SET_STOR_ERROR'}))
  },[])

    const HandelRemov=(id)=>{
      dipacthStor({type:'REMOVE_STOR' ,payload:id })
    }

  const serachStory =stories.data.filter((stor)=>stor.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))


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
  
  <List list={serachStory} javd={1220} HandelRemo={HandelRemov}/>
  <span>
    
  </span>
  </div>
)
 
}
 



export default App
