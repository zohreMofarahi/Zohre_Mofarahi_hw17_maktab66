import React,{useState , useEffect ,createContext} from 'react';
import Selecteditems from './Selecteditems';
import Options from './Options';
export const taskDone=createContext()


function Allitems() {

    const [data,setData]=useState('');
    const [check,setCheck]=useState([])
  




    useEffect( () => {
    fetch('https://61f6af402e1d7e0017fd6ee3.mockapi.io/ListItem')
    .then (response => response.json())
    .then(response => {setData(response)} )
    },[])


    const handlechange=(e) => {
        const selected= e.target.checked;
        if (selected == true) {
        setCheck([...check,
            e.target.value])
           
            
        } else {
            setCheck(check.filter(item => item!==e.target.value))
        }
       
    
    }

    return(
        <taskDone.Provider value={check} >
              <div style={{background:'#90E6ED', width:'30%', marginRight:'-700px',textAlign:'center'}}>
      <h3 style={{textAlign:'center'}}>All Items</h3>
        <ul>
              {data.map (item => <Options title={item} handle={handlechange}/>)}

        </ul>

        </div>

        <div style={{background:'pink', width:'30%'}}>
      <h3>Selected Items</h3>
      <Selecteditems/>
      </div>
   
   

        
      
     
        </taskDone.Provider>
    )

   


}


export default Allitems