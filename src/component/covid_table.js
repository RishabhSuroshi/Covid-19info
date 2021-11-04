import React,{useState,useEffect} from 'react'


function COVID() {

    const [data, setData] = useState([]);

    const getcovid_Data = async () => {
         const res = await fetch ('https://data.covid19india.org/data.json');
         const actualData = await res.json();
         console.log(actualData.statewise);
         setData(actualData.statewise);
    }

    useEffect(() => {
       getcovid_Data();
    }, [])
    return (
        <>
  


              <h1>🔴 Live</h1>  
    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    
  


    <table className="table">
  <thead>
    <tr>
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
      <th scope="col">active</th>
      <th scope="col">updated</th>
        <th scope="col">updated</th>
        
    </tr>
  </thead>
  <tbody>

    {
       data.map((curElem, ind) =>{
         return(
      <tr key ={ind}>
      <th scope="col">{curElem.state}</th>
      <td>{curElem.confirmed}</td>
      <td>{curElem.recovered}</td>
      <td>{curElem.deaths}</td>
      <td>{curElem.active}</td>
      <td>{curElem.lastupdatedtime}</td>
     <td>{curElem.lastupdatedtime}</td>
    </tr>
         )
       })

    }
  
      
  </tbody>
</table>











        </>
    )
}

export default COVID
