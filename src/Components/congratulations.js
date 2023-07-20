import React, { Component } from 'react'
import { Paper, TextField } from '@mui/material'
import {HiArrowLongRight} from 'react-icons/hi2'
import {HiArrowLongLeft} from 'react-icons/hi2';
import {IoManSharp} from 'react-icons/io5';
import {BsAlarm} from 'react-icons/bs';
import {LiaHomeSolid} from 'react-icons/lia'
import { Link } from 'react-router-dom'

export default class offersummary extends Component {
  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-md-4  dream'>
                <div className='m-5 mt-5 offer'>
                    <LiaHomeSolid className='home'/>
                   <p className='text-white p1' style={{marginLeft:100}}>Let's start your dream</p> <p className='text-white p2' style={{marginLeft:120}}>in a few steps!</p>
                   <p className='p-5 mt-5'></p>
                </div>
            </div>
            <div className='col-md-8 p-5'>
                <div className='container p-4 mt-3 '>
                    <h2 style={{color:'darkblue'}}>Congratulations !</h2><br/>
                    <p style={{fontSize:13,color:'blue',fontWeight:'bold'}}>We can save you $753 on your monthly mortage payment</p><br/>
                    <div className='d-flex flex-wrap pt-2'  style={{marginLeft:-20}}>
                        
                            <Link className='text-decoration-none'>
                            <div className='paper20'   elevation={3} >
                                <div className='icon18'><IoManSharp/></div>
                                <p className='' style={{fontSize:12,fontWeight:500,}} align='center'>CONTACT LENDER</p>
                            </div>
                            </Link>
                       
                        
                            <Link className='text-decoration-none'>
                            <div className=' paper21' elevation={3}>
                                <BsAlarm className='icon19'/>
                                <p className='pt-2' style={{fontSize:12,fontWeight:500,}} align='center'>SNOOZE ALARM</p>
                            </div>
                            </Link>
                        
                       
                          <Link  className='text-decoration-none' >
                          <div className=' paper22'  elevation={3}>
                                <BsAlarm className='icon20'/>
                                <p className='pt-2' style={{fontSize:12,fontWeight:500,}} align='center'>EDIT ALARM</p>
                            </div>
                          </Link>
                       
                        <Link  className='text-decoration-none'>
                        <div className=' paper23'  elevation={3}>
                            <img  src={require('../Components/Images/7291762.png')} width={50} height={50}/>
                            <p className='pt-1'style={{fontSize:11,fontWeight:500,}} align='center'>CONTACT WITH FINANCIAL ADVISER</p>
                        </div>
                        </Link>
                    </div><br/>

                
                    <div className='p-3 pt-5 d-flex' style={{marginRight:40}}>
                        <button className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link to='' className='text-decoration-none '>Back</Link></button>
                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:100}}><Link to='/' className='text-white text-decoration-none'>Next</Link> <HiArrowLongRight/></button>
                    </div><p className='p-1'></p>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
