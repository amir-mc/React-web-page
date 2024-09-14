
import Item from "./Item";

const List = (props) => {
    return(  
     <ul>
       <p>{props.javd}</p>
       {props.list.map((item)=>(
         <Item key={item.id} item={item}/>
         
       ))}
     </ul>
    )
   };

   export default List
