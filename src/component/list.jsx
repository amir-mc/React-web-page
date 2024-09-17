
import Item from "./Item";

const List = ({list , javd}) => {
    return(  
     <ul>
       <p>{javd}</p>
       {list.map(({ id ,...item})=>(
         <Item key={id} {...item}/>
         
       ))}
     </ul>
    )
   };

   export default List
