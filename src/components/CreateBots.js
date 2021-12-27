import React, { useEffect, useState} from 'react'
import SideBar from './SideBar.js'
import logo1 from '../images/rsi.png'
import '../styles/createBot.css';
import {funExchange} from './CreateEx'
import {useListBots} from './ListBots'
import {useListStrategies} from './ListStrategies'
import {useListExchanges} from './CreateEx'
import {db} from '../firebase'

export default function CreateBot() {
    const [Exchange] = useListExchanges()
    const [Strategies] = useListStrategies()
    const [Pairs, setPairs] = useState([])
    const [Bots] = useListBots()
    let author = "javier"
    const [Bot, setBot] = useState({
            name:'',
            author:author,
            strategy:'',
            money:'',
            exchanche:'',
            actived:false,
            pair:'',
            url:''
    })
    
    useEffect(() => {
        getData()
    }, [Bot])

    async function getData() {
        if(Bot.exchanche === '' ){
            setPairs(['Choose a exchange']);
        }else{
            db.collection('pair').where('name', '==', Bot.exchanche).onSnapshot((query) => {
                const list = [];
                query.forEach(document => {
                    list.push({...document.data(), Id:document.id})
                })
                setPairs(list[0].pair);
                }) 
        }
    }   
    console.log(Bot.exchanche)
    function BotRepeat(name){
        var res = false
        Bots.map(bot => {
            if(bot.name===name) res=!res;
        })
        return res;
    }
    const onInput=(e)=>{
        setBot({...Bot,[e.target.name]: e.target.value})
        console.log(Bot)
    }
    
    const onSubmit= async (e)=>{
        e.preventDefault()
        Bot.url=funExchange(Bot.exchanche)
        const newBot={
            name:Bot.name,
            author:Bot.author,
            strategy:Bot.strategy,
            money:Bot.money,
            exchanche:Bot.exchanche,
            actived:Bot.actived,
            pair:Bot.pair,
            url:Bot.url
        }
        console.log(newBot)
        if(!BotRepeat(newBot.name)){
            await db.collection('bot').doc().set(newBot);
            window.location.href = "/bots";
        }  
        else{
            window.alert('Bot Name repeated')
        } 
    }

    return(
        <div className="container-fluid ">
                <div className="row min-vh-100">
                        <SideBar/>
                    <div className="col-12 col-lg-10 " id="body">
                        <div className="row justify-content-center justify-content-md-start ml-md-5">
                            <div id="titleCreate">CREATE NEW BOT</div>
                        </div>
                        <div className="row justify-content-center justify-content-md-around " id="create">
                            <div className="col-11 col-md-5 col-xl-6" id="column">
                                <div className="" >
                                        <label className="form-label" id="titleLabel">Bot Name</label>
                                        <input type="text" className="form-control" name="name" required onChange={onInput} id="input">
                                        </input>
                                </div>
                                <div className="row justify-content-center" >
                                <div className="">
                                <label className="form-label" id="titleLabel">Exchange</label>
                                </div>
                                </div>
                                    <p className="row justify-content-center m-0">
                                    </p>
                                <div className="row justify-content-around pt-2 pb-5 py-4">
                                        {Exchange.map(exchanche => 
                                                    <div id="imagChoose" key={exchanche.Id}>
                                                        <label >
                                                            <input type="radio" name="exchanche" value={exchanche.name} className="card-input-e" onChange={onInput}/>
                                                            <div className="card-i">
                                                                <img src={exchanche.url} alt={exchanche.name} id="imag"/>
                                                            </div>
                                                        </label>       
                                                    </div>
                                                )}
                                </div>
                                <div className="row" id="form">
                                    <div className="col-12 col-md-6">
                                    <label className="form-label" id="titleLabel">Pair</label>
                                    <select className="form-control" name="pair" onChange={onInput} id="input">
                                        {Pairs.map( p => 
                                            <option key={p} value={p}>
                                                {p}
                                            </option>)
                                        }
                                    </select>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" id="titleLabel">Quantity</label>
                                        <div className="d-flex">
                                            <input type="number" className="form-control" name="money" aria-describedby="basic-addon2" required onChange={onInput} id="input"></input>
                                            <span className="input-group-text" id="basic-addon2">$</span>
                                        </div>
                                        <p className="text-center m-1">
                                            Make sure you have this quantity on your wallet
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11 col-md-5 col-xl-6" id="column">
                                <div className="row justify-content-around mx-2 mb-4">
                                    <p className="" id="titleLabel">Choose the strategy
                                    </p>
                                </div>
                                <div className="row justify-content-around ">
                                    {Strategies.map(s => 
                                        <div className="col-10 col-md-5 p-0 text-center"  key={s.Id}>
                                            <label id="strategyInput">
                                            <input type="radio" name="strategy" value={s.name} className="card-input-element" onChange={onInput}/>
                                                <div className="card-input">
                                                    <div className="text-center" id="titleInput">
                                                    <div className="">{s.name}</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <img src={logo1} alt={s.name} id="ima"></img>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    )}
                                </div>
                                
                            </div>
                            </div>
                            <div className="row justify-content-center py-4 pr-md-5">
                                <div className=" text-center">
                                    <form onSubmit={onSubmit}>
                                            <button type="submit" className="btn" id="buttonCreate"> Create Bot</button>
                                    </form>
                                </div>
                            </div>
                        
                        
                    </div>
                </div>
            </div>
    )
}
 