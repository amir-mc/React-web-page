
import { useEffect, useState } from 'react'
import usePgae from './useState'
import Card from './component/Card'
import Pageing from './component/Pageing'


const url='https://react-mini-projects-api.classbon.com/Programmer/programmers'
function App() {
  const [loding,data]=usePgae(url , 1)
  const [page,setpage]=useState(1)
  const [program,setprogram]=useState([])
  useEffect(()=>{
    if(loding) return 
    setprogram(data[page-1  ])
  },[loding,page])
  return(
  <div className="conainer pt-5">
    {
      loding&&(
        <div className="d-flex justify-content-center">
          <div className="spinner-border"></div>
        </div>
      )
    }   
    {
      !loding&&(
        <>
        <div className="row d-flex jutify-content-center">
          {
            program.map(({id,...programer})=>{
              return(
                <div className="col-3" key={id}>
                  <Card {...programer}/>
                </div> 
              )})
          }
        </div>
        <div className="row">
          <Pageing pages={data.length} setpage={setpage} activepage={page}/>
        </div>
        </>
      )}
    
  </div>
  )
  
}

export default App
