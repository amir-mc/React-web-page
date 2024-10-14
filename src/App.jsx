
import {  useState } from 'react'
import useFech from './useFech'
import Card from './component/Card'
import Pageing from './component/Pageing'


const url='https://react-mini-projects-api.classbon.com/Programmer/Sieve'
function App() {
  const pagesiZe=2
   const [page,setpage]=useState(1)
  const [loding,program]=useFech(url , {page:page,pagesiZe:pagesiZe})

  
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
            program.data.map(({id,...programer})=>{
              return(
                <div className="col-3" key={id}>
                  <Card {...programer}/>
                </div> 
              )})
          }
        </div>
        <div className="row">
          <Pageing pages={12} setpage={setpage} activepage={page}/>
        </div>
        </>
      )}
    
  </div>
  )
  
}

export default App
