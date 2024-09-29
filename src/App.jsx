

import { useEffect, useReducer, useState } from "react";
import List from "./components/list";
//import Item from "./components/Item";
import Search from "./components/search";

import useStateStor from "./hooks/useStoragestate";

const title = {
  number:'hello',
  titlee:'act pages'
};

const storyReduser=(state,action)=>{
  switch (action.type) {
    case 'SET_STOR':
      return action.payload;
       
      //case 'REMOVE_STOR':
     // return stories.filter((stor)=> stor.id !== action.payload)    
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
  const [stories , dipacthStor]=useReducer(storyReduser,[])
  //const [stories , Setsories]=useState([])
  const [loDing , isLoding]=useState(false);

  const [searchTerm , updateSerach]=useStateStor('search','')

  const sYncpromise =()=>
    new Promise((resolve)=>{
    setTimeout(() => {
      resolve({data:{stories:storItem}})
     
    }, 2000 );
  })  

  useEffect(()=>{
    isLoding(true);
      sYncpromise().then(result=>{
        dipacthStor({type:'SET_STOR' , payload: result.data.stories})
        isLoding(false)
      })
  },[])

    const HandelRemov=(id)=>{ 
      
      const storyFil =stories.filter(stor=> stor.id !== id)
      dipacthStor({type:'SET_STOR' , payload: storyFil})
     // dipacthStor({type:'REMOVE_STOR' ,payload:id })
   

    }

  const serachStory =stories.filter((stor)=>stor.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))


  const handelBack = (event) =>{  
    updateSerach(event.target.value)
 
  }
   

return (
  <div>
  <h1>
   {title.number} {title.titlee}
  </h1>



 {
  loDing ?(<p>LOding</p>):
  (<Search type="text" id="Search" value="search" label="search" seaechs={handelBack} titleSearch={searchTerm} autoFo/>)
 }
  
  <List list={serachStory} javd={1220} HandelRemo={HandelRemov}/>
  <span>
    
  </span>
  </div>
)
 
}
 



export default App
