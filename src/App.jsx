
import usePgae from './useState'


const url='https://react-mini-projects-api.classbon.com/Programmer/programmers'
function App() {
  const [javad,ahmad]=usePgae(url , 3)
  return(
  <div className="conainer">
    هلو بیب
  </div>
  )
  
}

export default App
