import {useState} from 'react'
import DataList from '../components/DataList'

function Form(){

  const [region,setRegion] = useState("North Scotland")
  const [searchState,setSearchState] = useState("false")

  function handleSubmit(event){
    event.preventDefault()
    setSearchState(region)
  }
  

  return (  
    <>
    <div id="input-section">
    <form id="form" onSubmit={handleSubmit}>
    <label htmlFor="region">Choose region:  </label>
    <br></br>

    <select 
    onChange={e => setRegion(e.target.value)}
    >
      <option value="North Scotland">North Scotland</option>
      <option value="South Scotland">South Scotland</option>
      <option value="Scotland">Scotland</option>
      <option value="North Wales & Merseyside">North Wales & Merseyside</option>
      <option value="South Wales">South Wales</option>
      <option value="Wales">Wales</option>
      <option value="North East England">North East England</option>
      <option value="North West England">North West England</option>
      <option value="South East England">South East England</option>
      <option value="South West England">South West England</option>
      <option value="East Midlands">East Midlands</option>
      <option value="West Midlands">West Midlands</option>
      <option value="East England">East England</option>
      <option value="Yorkshire">Yorkshire</option>
      <option value="London">London</option>
      <option value="England">England</option>

    
    </select>

    <p>
    <button id="get-carbon-data-button">Get Carbon Data</button>
    </p>
    </form>
    </div>

    <DataList region={region} searchState={searchState} ></DataList>
    </>
    )
}

export default Form