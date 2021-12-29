import React, { useEffect,useState,useContext} from 'react'
import '../styles/createEx.css';
import SideBar from './SideBar.js'
import {db} from '../firebase'
import { AuthContext } from "./Auth.js";

export function funExchange (ex){
    if(ex==='binance')
    {   return 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=010';
    }
    else
    {   return 'https://elcriptomonedas.com/wp-content/uploads/2021/01/kraken.png'; 
    }
}

export function useListExchanges(){
    const [Exchanges, setExchanges] = useState([])
    const { currentUser } = useContext(AuthContext);
    
    async function listOfEx() {
        db.collection('exchange').where('author', '==', currentUser.email).onSnapshot((query) => {
            const list = [];
            query.forEach(document => {
                list.push({...document.data(), Id:document.id})
            })
        setExchanges(list);
        }) 
    }

    useEffect(() => {
             listOfEx()
    },[])
    return [Exchanges, setExchanges];
}
export default function CreateEx() {
    const { currentUser } = useContext(AuthContext);
    const [Exchanges] = useListExchanges()
    const [Pairs, setPairs] = useState([])
    const [Account, setAccount] = useState({
            name:'',
            author:currentUser.email,
            apiName:'',
            apiKey:'',
            url:''
    })

    useEffect(() => {
        listOfPair()
    }, [])
    async function listOfPair() {
        db.collection('pair').onSnapshot((query) => {
            const list = [];
            query.forEach(document => {
                list.push({...document.data(), Id:document.id})
            })
        setPairs(list);
        }) 
        
    }
    console.log(Account)
    const onSubmit= async (e)=>{
        e.preventDefault()
        Account.url=funExchange(Account.name)
        const newExchange={
            name:Account.name,
            author:Account.author,
            apiName:Account.apiName,
            apiKey:Account.apiKey,
            url:Account.url
        }
        await db.collection('exchange').doc().set(newExchange);
        document.querySelectorAll('[name=name]').forEach((x) => x.checked = false);
        setAccount({
            name:'',
            author:currentUser.email,
            apiName:'',
            apiKey:'',
            url:''
    })
    }

    const onInput=(e)=>{
        setAccount({...Account,[e.target.name]: e.target.value})
    }

    const deleteEx = async(id) =>{
        await db.collection('exchange').doc(id).delete();
        
    }
    return (
        <div className="container-fluid " >
                <div className="row min-vh-100">                  
                        <SideBar/>                   
                    <div className="col-12 col-lg-10 " id="body">
                        <div className="row justify-content-center justify-content-md-start ml-md-5">
                            <div id="titleAdd">EXCHANGE</div>
                        </div>
                        <div className="row justify-content-around">
                            <div className="col-11 col-md-4 col-xl-4 mt-3">   
                                <div className="card " id="cardEx">
                                    <div className="" id="titleCard">
                                        Your Exchanges
                                    </div>
                                    
                                    <div className="" id="titleCard">
                                    
                                        { [Exchanges]=='' ? 
                                        <div className=" p-3 text-center fs-5">
                                            <i className="bi bi-wrench mx-1"></i> You don't have any Exchange.
                                        </div> 
                                        :
                                        Exchanges.map(ex => 
                                            <div id="rowEx" className="row p-3 m-3" key={ex.Id}>
                                                <div >
                                                    <img src={ex.url} alt="binance" id="imagYour"/> 
                                                    <button className="btn" id="botonEliminar" onClick={()=>deleteEx(ex.Id)}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-11 col-md-7 col-xl-7">
                                
                                <div className="card " id="cardEx">
                                <div className="" id="titleCard">
                                    New Exchange
                                </div>
                                <p className="text-center" id="subTitle">Go to your exchange account and create a new API, then copy the keys and paste here to connect tour exchange to the bot.
                                        </p>
                                <div className="row justify-content-around">
                                    <div className="col-10 col-md-6 py-3" id="titleCard">
                                        <div className="row justify-content-center">
                                            <div className="form-group mb-3">
                                                <label className="form-label" id="lab">ApiName</label>
                                                <input type="text" className="form-control in" placeholder="Paste your ApiName" name="apiName" value={Account.apiName} required onChange={onInput}>
                                                </input>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="form-group">
                                                <label className="form-label" id="lab">ApiKey</label>
                                                <input type="password" className="form-control in" placeholder="Paste your ApiKey" value={Account.apiKey} name="apiKey" required onChange={onInput}>
                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-10 col-md-5 py-3 text-center" id="titleCard">
                                    <label id="lab">Choose the Exchange</label>
                                        <div className="row p-2 justify-content-center justify-content-md-around">
                                            {Pairs.map(pair => 
                                                    <div id="imagChoose" key={pair.name}>
                                                        <label>
                                                            <input type="radio" name="name" value={pair.name} className="card-input-e" onChange={onInput}/>
                                                            <div className="card-i">
                                                                <img src={pair.url} alt={pair.name} id="imag"/>
                                                            </div>
                                                        </label>       
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                                    <form onSubmit={onSubmit}>
                                        <div className="row justify-content-center ">
                                            <button type="submit" className="btn col-8 col-md-4" id="buttonSave"> Save exchange</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
    )

}
 