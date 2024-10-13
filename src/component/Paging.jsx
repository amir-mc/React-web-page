import _ from "lodash"
const Pageing=({pages,setpage,activepage})=>  {
    const reveRsers =()=>
    {
        setpage(()=>{
            let reveRsers=2;
            return reveRsers
        })
    }

    return(
    <nav >
        <ul className="pagination d-flex justify-content-center mt-5  " dir="rtl">
            <li className="page-item" onClick={reveRsers}>
                <a href="#" className="page-link">ghabli</a>
            </li>
   
        {
            _.times(pages,(index)=>(
                <li key={`pagination-`+index} className={`page-item ${index+1 === activepage ?'active':''}`} onClick={()=>setpage(index+1)}>
                    <a className="page-link" href="#">
                        {index + 1}
                        </a>
                </li>
            )) 
        }
    
            <li>
                <a href="#" className="page-link">badi</a>
            </li>
        </ul>
    </nav>
    )
}
export default Pageing
