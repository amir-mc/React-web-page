

import List from "./components/list";
//import Item from "./components/Item";
import Search from "./components/search";

const title = {
  number:'hello',
  titlee:'act pages'
};
const App = () => {

  const H1 = (mamad) =>{
    mamad='155';
     
    console.log(mamad)

  }

  const handelBack = (event) =>{  
    console.log(event.target.value)

  }
  
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
 
return (
  <div>
  <h1>
   {title.number} {title.titlee}
  </h1>
  <H1/>
  <Search seaechs={handelBack}/>
  <List list={stor} javd={1220}/>
  <span>
    
  </span>
  </div>
)
 
}
 



export default App
