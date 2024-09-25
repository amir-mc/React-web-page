
import Item from "./Item";

const List = ({list , javd , HandelRemov}) => {
    return(   
     <ul>
       <p>{javd}</p>
       {list.map((item)=>(
         <Item key={item.id} {...item} HandelRemov={HandelRemov}/>
         
       ))}
     </ul>
    )
   };

   export default List
