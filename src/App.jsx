
const title = {
  number:'hello',
  titlee:'act pages'
};

const combolist = [
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

const App = () => {

 
return (
  <div>

  <h1>
   {title.number} {title.titlee}
  </h1>
  <Search/>
  <List/>
 

  </div>
  
  
  
)
 
}
const List = () => {
  return(
    <ul>
    {
      combolist.map(function(item){
        return <li key={item.id}>
          
          <span>
            <a href={item.URL}> {item.name} </a>
          </span>
          <span>
            {
              item.skill
            }
          </span>
          <span>
            {
              item.title
            }
          </span>
        
        </li>
      })
    }
  </ul>

  )
}
const Search = () => {
  return(
<div>
<label htmlFor="search">Search</label>
  <input type="text" id="search" />

</div>    
  )
}

export default App
