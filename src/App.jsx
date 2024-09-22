

import List from "./components/list";
//import Item from "./components/Item";
import Search from "./components/search";

import useStateStor from "./hooks/useStoragestate";

const title = {
  number:'hello',
  titlee:'act pages'
};
const App = () => {

  const stor = [
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
 
  const [searchTerm , updateSerach]=useStateStor('search','')

  const serachStory =stor.filter((stor)=>stor.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))


  const handelBack = (event) =>{  
    updateSerach(event.target.value)
 
  }
   

return (
  <div>
  <h1>
   {title.number} {title.titlee}
  </h1>
 
  <Search seaechs={handelBack} titleSearch={searchTerm}/>
  <List list={serachStory} javd={1220}/>
  <span>
    
  </span>
  </div>
)
 
}
 



export default App

