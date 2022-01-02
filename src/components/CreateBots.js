import React, { useEffect, useState,useContext} from 'react'
import { set, useForm } from "react-hook-form";
import Swal from 'sweetalert2'

import logo1 from '../images/rsi.png'
import '../styles/createBot.css';

import SideBar from './SideBar.js'
import {funExchange} from './CreateEx'
import {useListBots} from './ListBots'
import {useListStrategies} from './ListStrategies'
import {useListExchanges} from './CreateEx'
import {db} from '../firebase'
import { AuthContext} from "./Auth.js";

export default function CreateBot() {
    const [Exchange] = useListExchanges()
    const [Strategies] = useListStrategies()
    const [Pairs, setPairs] = useState(['Choose a exchange'])
    const [Bots] = useListBots()
    
    const { currentUser } = useContext(AuthContext);
    const { setValue,register, handleSubmit, formState: { errors } } = useForm();
    
     const getData= async (v) => {
         console.log(v)
        if(v == ''){
            setPairs(['']);
        }else{
            setValue('pair','')
            db.collection('pair').where('name', '==', v).onSnapshot((query) => {
                const list = [];
                query.forEach(document => {
                    list.push({...document.data(), Id:document.id})
                })
                
                setPairs(list[0].pair);
                
                }) 
        }
    }   
    
    function BotRepeat(name){
        var res = true
        Bots.map(bot => {
            if(bot.name===name) res='The name of the bot is alredy in use';
        })
        return res;
    }
    
    const onSubmit= async (data)=>{
        console.log('hi')
        const url=funExchange(data.exchanche)
        const newBot={
            name:data.name,
            author:currentUser.email,
            strategy:data.strategy,
            money:data.money,
            exchanche:data.exchanche,
            actived:false,
            pair:data.pair,
            url:url
        }
        console.log(newBot)
            await db.collection('bot').doc().set(newBot);
            window.location.href = "/bots";
        
    }

    return(
        <div className="container-fluid ">
                <div className="row min-vh-100">
                        <SideBar/>
                    <div className="col-12 col-lg-10 " id="body">
                        <div className="row justify-content-center justify-content-md-start ml-md-5">
                            <div id="titleCreate">CREATE NEW BOT</div>
                        </div>
                        <div className="row justify-content-center justify-content-md-around py-3 px-5" id="create">
                            <div className="col-11 col-md-5 col-xl-6" id="column">
                                <div className="" >
                                        <label className="form-label" id="titleLabel">Bot Name</label>
                                        <input type="text" className="form-control" name="name" id="input"
                                         {...register('name',{
                                            required:{
                                              value:true,
                                              message:'Field is empty'
                                            },
                                            validate:BotRepeat,
                                          })}>
                                        </input>
                                        {errors.name && <span className='text-center text-danger'>{errors.name.message}</span>}
                                </div>
                                <div className="row justify-content-center" >
                                <div className="text-center">
                                <label className="form-label" id="titleLabel">Exchange</label>
                                </div>
                                </div>
                                    <p className="row justify-content-center m-0">
                                    {errors.exchanche && <span className='text-center text-danger'>{errors.exchanche.message}</span>}
                                    </p>
                                <div className="row justify-content-around pt-2 py-4">
                                        {
                                        [Exchange]=='' ? 
                                        <div className=" p-2 text-center fs-5 text-white">
                                            <i className="bi bi-wrench mx-1"></i> You don't have any Exchange.
                                        </div> 
                                        :
                                        Exchange.map(exchanche => 
                                                    <div id="imagChoose" key={exchanche.Id}>
                                                        <label >
                                                            <input type="radio" name="exchanche" value={exchanche.name} className="card-input-e"
                                                             {...register('exchanche',{
                                                                
                                                                required:{
                                                                  value:true,
                                                                  message:'Field is empty'
                                                                },
                                                                onChange: (e) => getData(e.target.value)
                                                              })}/>
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
                                    <select className="form-control" name="pair" id="input"
                                     {...register('pair',{
                                        required:{
                                          value:true,
                                          message:'Field is empty'
                                        }
                                      })}>
                                        {Pairs.map( p => 
                                            <option key={p} value={p}>
                                                {p}
                                            </option>)
                                        }
                                    </select>
                                    {errors.pair && <span className='text-center text-danger'>{errors.pair.message}</span>}
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label" id="titleLabel">Quantity</label>
                                        <div className="d-flex">
                                            <input type="number" className="form-control" name="money" aria-describedby="money" id="input"
                                             {...register('money',{
                                                required:{
                                                  value:true,
                                                  message:'Field is empty'
                                                }
                                              })}></input>
                                            <span className="input-group-text" id="money">$</span>
                                        </div>
                                        {errors.money && <span className='text-center text-danger'>{errors.money.message}</span>}
                                        <p className="text-center m-1 text-white">
                                            Make sure you have this quantity on your wallet
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11 col-md-5 col-xl-6" id="column">
                                <div className="row justify-content-around mx-2 mb-4">
                                    <p className="text-center" id="titleLabel">Choose the strategy
                                    </p>
                                </div>
                                <div className="row justify-content-around ">
                                {errors.strategy && <span className='text-center text-danger'>{errors.strategy.message}</span>}
                                    {Strategies.map(s => 
                                        <div className="col-10 col-md-5 p-0 text-center"  key={s.Id}>
                                            <label id="strategyInput">
                                            <input type="radio" name="strategy" value={s.name} className="card-input-element" 
                                             {...register('strategy',{
                                                required:{
                                                  value:true,
                                                  message:'Choose a strategy'
                                                }
                                              })}/>
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
                            <div className="row justify-content-center py-2 ">
                                <div className=" text-center">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                            <button type="submit" className="btn px-5" id="buttonCreate"> Create Bot</button>
                                    </form>
                                </div>
                            </div>
                        
                        
                    </div>
                </div>
            </div>
    )
}
 