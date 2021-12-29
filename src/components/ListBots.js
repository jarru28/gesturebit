import React, { useEffect, useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import {format} from 'timeago.js'
import '../styles/listBots.css';
import SideBar from './SideBar.js'
import {db} from '../firebase'
import { AuthContext } from "./Auth.js";

export function useListBots(){
    const [Bots, setBots] = useState([])
    const { currentUser } = useContext(AuthContext);
    async function listOfBots() {
        db.collection('bot').where('author','==',currentUser.email).onSnapshot((query) => {
            const list = [];
            query.forEach(document => {
                list.push({...document.data(), Id:document.id})
            })
            setBots(list)
        })
    }

    useEffect(() => {
        listOfBots()
    },[])
    
    return [Bots, setBots];
}
export default function ListBots(){
    const [Bots] = useListBots()
    console.log(Bots)

    async function activateBot(id){
        console.log(id)
    }
    async function deleteBot(id){
        await db.collection('bot').doc(id).delete();
    }

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                    <SideBar/>
                <div className="col-12 col-lg-10" id="body">
                    <div className="row justify-content-center justify-content-md-start ml-md-5">
                        <div id="tit">HOME</div>
                    </div>
                    <div className="row justify-content-around pt-3">
                        
                        <Link className="col-10 col-md-4 col-lg-3 text-center" to="/createBot" id="link">Create New Bot
                        </Link>
                        <Link className="col-10 col-md-4 col-xl-3 text-center" to="/createBot" id="link">Create New Exchange
                        </Link>
                    </div>
                    <div className="row justify-content-center justify-content-md-start ml-md-5 ">
                        <div id="tit">YOUR BOTS</div>
                    </div>
                    
                    <div className="row justify-content-center">
                    { [Bots]=='' ? 
                    <div className="col-11 col-md-8 col-xl-8 mt-5 p-4 text-center fs-5" id='caja_bot'>
                        <i className="bi bi-wrench mx-1"></i> You don't have any Bot.
                    </div> 
                    :
                    Bots.map(bot => 
                        <div className="col-11 col-md-8 col-xl-8" key={bot.Id}>
                                <div className="row" id="nameBot">
                                    {bot.name}
                                </div>
                            <div className="row " id="caja_bot">
                                <div className="col-11 col-md-5 col-xl-2">
                                    <img src={bot.url} alt="binance" id="imag"/>    
                                </div>
                                <div className="col-11 col-md-5 col-xl-2">
                                    {bot.strategy}   
                                </div>
                                <div className="col-11 col-md-5 col-xl-2">
                                    {bot.money}$   
                                </div>
                                <div className="col-11 col-md-5 col-xl-2">
                                    {bot.pair}   
                                </div>
                                <div className="col-11 col-md-5 col-xl-2">
                                    {format(bot.date)}   
                                </div>
                                <button className="btn col-11 col-md-5 col-xl-2" id="botonEliminar" onClick={()=>deleteBot(bot.Id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                        ) }
                    </div>
                
                </div>
            </div>
        </div>
    )

}
