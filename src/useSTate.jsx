import { useEffect, useState } from "react"
const useFech=(url,stive)=>{

    const[loding , setLoding]=useState(true)
    const [data ,setData]=useState([])

    const getData=async()=>{
        setLoding(true);
        const response = await fetch(url,{method:'POST', body: JSON.stringify(stive),
            headers:{'content-type':'application/json;charset-UTF-8'}
        })
        const data =await response.json()   
        setData(data)
        setLoding(false);
    }
    useEffect(()=>{
        getData();

    },[stive.page])
    return([loding,data])

}
export default useFech;
