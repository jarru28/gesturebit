import React, {useState,useEffect} from 'react'
import SideBar from './SideBar.js'
import logo1 from '../images/bollinger_bands.png'
import '../styles/listStrategies.css';
import {db} from '../firebase'


 
export function useListStrategies(){
    const [strategies, setStrategies] = useState([])
    
    async function listOfStrategies(){

        db.collection('strategy').onSnapshot((query) => {
            const listStrategy = [];
            query.forEach(document => {
                listStrategy.push({...document.data(), Id:document.id})
            })
            setStrategies(listStrategy)
        })   
    }

    useEffect(() => {
             listOfStrategies()
    },[])
    return [strategies, setStrategies];
}
export default function ListStrategies(){
    const [strategies] = useListStrategies()

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                    <SideBar/>
                <div className="col-12 col-sm-10 " id="body">
                    <div className="row justify-content-center justify-content-md-start ml-md-5">
                        <div id="titleStr">STRATEGIES</div>
                    </div>
                    
                    <div className="row justify-content-around">
                        {strategies.map(s => 
                            <div className="col-11 col-lg-4 col-xl-3 p-0" id="strategy" key={s.Id}>
                                <div className="text-center" id="titles">
                                    <h5 className="">{s.name}</h5>
                                </div>
                                <div className="text-center pb-2">
                                <img src={logo1} alt={s.name} id="im"></img>
                                </div>
                                <div className="px-3 pb-3" id="description">
                                {s.description}   
                                </div>
                            </div>
                        )}                 
                    </div>
                </div>
            </div>
        </div>
    )

}
