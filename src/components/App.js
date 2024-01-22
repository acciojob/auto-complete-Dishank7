
import React , {useEffect, useState} from "react";
import './../styles/App.css';

const Fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]


const App = () => {

  const[search , setsearch] = useState('')
  const[country , setcountry] = useState(Fruits)


  useEffect(()=>{
   setcountry(country.filter((value)=>{return(value.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()))}))
  },[search])


  return (
    <div>
        {/* Do not remove the main div */}
        <h3>Search Item</h3>
        <input type="text" onChange={(e)=>setsearch(e.target.value)} />
        <ul>
          
            {
              country.map((value)=>{
                return(
               <li>{value}</li>
                )
              })
            }
          
        </ul>
    </div>
  )
}

export default App
