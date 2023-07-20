import { Paper, TextField } from '@mui/material'
import React, { Component } from 'react';
import {MdFlightClass} from 'react-icons/md';
import {GrUserManager} from 'react-icons/gr';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {SlCalender} from 'react-icons/sl';
import {LiaHomeSolid} from 'react-icons/lia'
import {HiArrowLongRight} from 'react-icons/hi2'
import {HiArrowLongLeft} from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import Confetti from 'react-dom-confetti';
import PropTypes from 'prop-types';

export default class infodetails extends Component {
    constructor(){
        super();
        this.state={
           isExploded:false
        }
    }
    handleExplosion = () => {
      this.setState({ isExploded: true });
    };

  render() {
    const { isExploded } = this.state;
    const confettiConfig = {
      angle: 90,
      spread: 180,
      startVelocity: 120,
      elementCount: 400,
      dragFriction: 0.18,
      duration: 2500,
      stagger: 4,
      colors: ['#fc1303', '#29cdff', '#78ff44', '#cf03fc', '#fdff6a','#fdff6b','#fc5e03','#fcf803','#5efc03','#030ffc']
    };
    return (
      <div className='row'>
        <div className='col-md-4  dream'>
            <div className='m-5 mt-5 offer'>
                    <img src={require('./Images/download.png')} className='flight'/>
                   <p className='text-white p1' style={{marginLeft:100}}>Let's start your dream</p> <p className='text-white p2' style={{marginLeft:120}}>in a few steps!</p>
                   <p className='p-5 mt-5'></p>
                </div>
        </div>
        <div className='col-md-8  p-5 mt-3'>
            <div className='p-2 mt-5'>
                <Paper elevation={12} className='p-4 '  >
                     <h2 className='text-primary'>Congratulations !</h2><br/>
                     <p>Lorem ipsum ?</p><br/>
                     <div className='d-flex'>
                        <button class='btn btn-primary' onClick={this.handleExplosion} style={{width:80,borderRadius:40,height:35}} >Yes</button>
                        <Confetti active={isExploded} config={confettiConfig} />
                        <button className='btn btn-outline-primary ms-3' style={{width:80,borderRadius:40,height:35}}>No</button>
                     </div><br/>
                     
  
                </Paper><br/>
                    <div className='p-3 pt-5 d-flex' style={{marginRight:40}}>
                        <button className='btn btn-outline-primary ms-auto ' style={{borderRadius:20,width:100,textDecoration:'none'}}><HiArrowLongLeft/><Link to='' className='text-decoration-none '>Back</Link></button>
                        <button className='btn btn-primary ms-4' style={{borderRadius:20,width:100}}><Link to='/flightselect' className='text-white text-decoration-none'>Next</Link> <HiArrowLongRight/></button>
                    </div><br/><br/>
                    
            </div>
        </div>
      </div>
    )
  }
}
