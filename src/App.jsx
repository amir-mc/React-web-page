

import { useEffect, useState } from "react";
import List from "./components/list";
//import Item from "./components/Item";
import Search from "./components/search";

import useStateStor from "./hooks/useStoragestate";

const title = {
  number:'hello',
  titlee:'act pages'
};
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
  const [stories , Setsories]=useState([])
  const [loDing , isLoding]=useState(false);
  const [eRorr , setISeroor]=useState(false)
  const [searchTerm , updateSerach]=useStateStor('search','')

  const sYncpromise =()=>
    new Promise((resolve,reject)=>{
    setTimeout(() => {
      //resolve({data:{stories:storItem}})
      reject()
    }, 2000 );
  })  

  useEffect(()=>{
    isLoding(true);
      sYncpromise().then(result=>{
        Setsories(result.data.stories)
        isLoding(false)
      }).catch(()=> setISeroor(true))
  },[])

    const HandelRemov=(id)=>{ 
      const storyFil =stories.filter(stor=> stor.id !== id)
      Setsories(storyFil);

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
    eRorr && <p>ERORRRRRRRR</p>
  }

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
