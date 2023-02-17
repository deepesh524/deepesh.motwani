import React, { useEffect, useState } from 'react';
import './sidebar.css';
import Logo from '../../img/DeepeshMotwani1.png';

const Sidebar = () => {
    const pages = [
        {label:'About'},
        {label:'My Skills'},
        {label:'Work'},
        {label:'Contact'},
        {label:'Blog'},
    ]
    useEffect(() => {
        document.addEventListener('click',e=>{
            document.getElementById('sidebarMenu').style.animation = 'moveup 0.5s forwards'
        })
        
        return () => {
            document.removeEventListener('click',e=>{
                document.getElementById('sidebarMenu').style.animation = 'moveup 0.5s forwards'
            })
        }
    }, [])
    
    return (
        <div>
            <div className='sidebar'>
                <div className='sidebarLogo'>
                    <img src={Logo} alt='' className='logo'></img>
                    <div style={{fontSize:'25px',fontFamily:"'Acme', sans-serif"}}>Deepesh</div>
                    <div className='logoDesc' style={{fontSize:'12px',paddingTop:'5px',paddingBottom:'5px'}}>Frontend Developer</div>
                </div>
                <div className='sidebarIcon' onClick={(e)=>{e.stopPropagation();document.getElementById('sidebarMenu').style.animation = 'droptop 0.5s forwards'}}>
                    ...
                </div>
                <div className='sidebarPages'>
                    {pages.map((item,index)=>{
                        return <div className='sidebarPageWrapper' key={index}>
                            {item.label}
                        </div>
                    })}
                </div>
            </div>
            <div id='sidebarMenu' className='sidebarMenu'>
                {pages.map((item,index)=>{
                    return <div className='sidebarPageWrapper' key={index}>
                        {item.label}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Sidebar