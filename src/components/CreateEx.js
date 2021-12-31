import React, { useEffect,useState,useContext} from 'react'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

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
    const { register, handleSubmit, formState: { errors },resetField} = useForm();
    const [Exchanges] = useListExchanges()
    const [Pairs, setPairs] = useState([])

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

    const onSubmit= async (data)=>{
        const newExchange={
            name:data.name,
            author:currentUser.email,
            apiName:data.apiName,
            apiKey:data.apiKey,
            url: funExchange(data.name)
        }
        let confirm = false;
        Swal.fire({
            title: 'Do you want to confirm?',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: `Cancel`,
            confirmButtonColor: 'green',
          }).then( async (result) => 
            {
            if (result.isConfirmed) {
                resetField('apiName');
                resetField('apiKey');
                document.querySelectorAll('[name=name]').forEach((x) => x.checked = false);
                await db.collection('exchange').doc().set(newExchange);
                Swal.fire({
                    title:'Exchange Saved!',
                    icon:'success',
                    showConfirmButton: false,
                    timer: 2000,
                    position:'top'
                });
            }
            })    
        
    }

    const deleteEx = async(id) =>{
        Swal.fire({
            title: 'Do you want to confirm?',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: `Cancel`,
            confirmButtonColor: 'green',
          }).then( async (result) => 
            {
            if (result.isConfirmed) {
                await db.collection('exchange').doc(id).delete();
                Swal.fire({
                    title:'Exchange deleted!',
                    icon:'success',
                    showConfirmButton: false,
                    timer: 2000,
                    position:'top'
                });
            }
            })  
        
    }

    let InKey='';
    let InName=''
    if(errors.apiKey)InKey='inputLogErr'; else InKey='inputLog';
    if(errors.apiName)InName='inputLogErr'; else InName='inputLog';

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
                                                <div className='d-flex'>
                                                    <img src={ex.url} alt="binance" id="imagYour"/>
                                                    <div>
                                                        <div className='text-success mx-3'>{ex.apiName.substring(0,8)}...</div>
                                                        <div className='text-success mx-3'>{ex.apiKey.substring(0,8)}...</div>
                                                    </div>
                                                    <button className="btn" id="" onClick={()=>deleteEx(ex.Id)}>
                                                    <i class="bi bi-x-square text-danger fs-4"></i>
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
                                                <input type="text" className="form-control " id={InName} placeholder="Paste your ApiName" name="apiName" 
                                                {...register('apiName',{
                                                    required:{
                                                      value:true,
                                                      message:'Field is empty'
                                                    }
                                                  })} />
                                                  {errors.apiName && <span className='text-danger'>{errors.apiName.message}</span>}
                                                
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="form-group">
                                                <label className="form-label" id="lab">ApiKey</label>
                                                <input type="password" className="form-control " id={InKey} placeholder="Paste your ApiKey" name="apiKey" 
                                                {...register('apiKey',{
                                                    required:{
                                                      value:true,
                                                      message:'Field is empty'
                                                    }
                                                  })} />
                                                  {errors.apiKey && <span className='text-danger'>{errors.apiKey.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-10 col-md-5 py-3 text-center" id="titleCard">
                                    <label id="lab">Choose the Exchange</label>
                                        <div className="row p-2 justify-content-center justify-content-md-around">
                                        {errors.name && <span className='text-danger'>{errors.name.message}</span>}
                                            {Pairs.map(pair => 
                                                    <div id="imagChoose" key={pair.name}>
                                                        <label>
                                                            <input type="radio" name="name" value={pair.name} className="card-input-e" 
                                                            {...register('name',{
                                                                required:{
                                                                  value:true,
                                                                  message:'Select a Excange'
                                                                }
                                                              })} />
                                                              
                                                            <div className="card-i">
                                                                <img src={pair.url} alt={pair.name} id="imag" />
                                                            </div>
                                                        </label>       
                                                    </div>
                                                )}
                                                
                                        </div>
                                    </div>
                                </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
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
 