import { useEffect, useState } from "react"
import _ from "lodash"
const usePgae=(url,pagesize)=>{

    const[loding , setLoding]=useState(true)
    const [data ,setData]=useState([])

    const getData=async()=>{
        const response = await fetch(url)
        const data =await response.json()

        const pageData= _.chunk(data,pagesize)
        console.log(pageData)
        setData(pageData)
        setLoding(false);
    }
    useEffect(()=>{
        getData();

    },[])
    return([loding,data])

}
export default usePgae;
