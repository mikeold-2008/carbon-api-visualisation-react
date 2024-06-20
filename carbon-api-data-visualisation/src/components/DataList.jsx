import {useEffect,useState} from 'react'
import axios from 'axios';
import '../index.css'
import DoughnutChart from './DoughnutChart';
import ChartStyling from './ChartStyling';

function DataList({region,searchState}){
    const [intensity,setIntensity] = useState("")
    const [intensityCSSClass,setIntensityCSSClass] = useState("")
    const [isError,setIsError] = useState(false)
    const [regionData,setRegionData]=useState([])
    const [generationMix,setGenerationMix]=useState([])
    const [showGraph, setShowGraph] = useState(false)

    useEffect(()=>{
    axios.get('https://api.carbonintensity.org.uk/regional')
    .then((regionalData)=>{
    setRegionData(regionalData.data.data[0].regions)
    regionData.map((reg)=>{
        if(reg.shortname===region){ 
        setIntensity(reg.intensity.index[0].toUpperCase() + reg.intensity.index.substring(1) + " Carbon Intensity")
        setGenerationMix(reg.generationmix)
        setShowGraph(true)
        setIntensityCSSClass("intensity-"+reg.intensity.index.replaceAll(" ",""))
        } 
    })
    })
    .catch((err)=>{
        setIsError(true)
    })  
    },[searchState])


    if(isError){
        return (<h1>Oh no! Something went wrong</h1>)
    }

    return (
    <div className="data-list">
        <div id={intensityCSSClass}>
        <h2>{intensity}</h2>
        </div>
        <br></br>
        
        <ChartStyling>
        {showGraph ? 
            (<DoughnutChart generationMix={generationMix}></DoughnutChart>
            ): <p id="form">Search for a region to see some data!</p> 
        }
        </ChartStyling>
    </div>
    )
}

export default DataList