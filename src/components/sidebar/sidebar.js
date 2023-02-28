import React, { useEffect, useState } from 'react';
import './sidebar.css';
import Logo from '../../img/DeepeshMotwani1.png';

const Sidebar = () => {
    const pages = [
        {label:'About',value:'#about'},
        {label:'My Skills',value:'#mySkills'},
        {label:'Work',value:'#work'},
        {label:'Contact',value:'#contact'},
        {label:'Blog',value:'#blog'},
    ]
    const [topbarOpened, setTopbarOpened] = useState(false)
    useEffect(() => {
        document.addEventListener('click',e=>{
            document.getElementById('sidebarMenu').style.animation = 'moveup 0.5s forwards'
            setTopbarOpened(false);
        })
        
        return () => {
            document.removeEventListener('click',e=>{
                document.getElementById('sidebarMenu').style.animation = 'moveup 0.5s forwards';
                setTopbarOpened(false);
            })
        }
    }, [])
    
    return (
        <div>
            <div className='sidebar'>
                <div className='sidebarLogo'>
                    <a href='#home'>
                        <img src={Logo} alt='' className='logo'></img>
                    </a>
                    <div style={{fontSize:'25px',fontFamily:"'Acme', sans-serif"}}>Deepesh</div>
                    <div className='logoDesc' style={{fontSize:'12px',paddingTop:'5px',paddingBottom:'5px'}}>Frontend Developer</div>
                </div>
                <div className='sidebarIcon' onClick={(e)=>{e.stopPropagation();if(topbarOpened){setTopbarOpened(false);document.getElementById('sidebarMenu').style.animation = 'moveup 0.5s forwards';}else{setTopbarOpened(true);document.getElementById('sidebarMenu').style.animation = 'droptop 0.5s forwards'}}}>
                    ...
                </div>
                <div className='sidebarPages'>
                    {pages.map((item,index)=>{
                        return <a style={{textDecoration:'none',width:'50%'}} key={index} href={item.value}>
                            <div className='sidebarPageWrapper'>
                                {item.label}
                            </div>
                        </a>

                    })}
                </div>
            </div>
            <div id='sidebarMenu' className='sidebarMenu'>
                {pages.map((item,index)=>{
                    return <a style={{textDecoration:'none',width:'50%'}} key={index} href={item.value}>
                        <div className='sidebarPageWrapper' key={index}>
                            {item.label}
                        </div>
                    </a>
                })}
            </div>
        </div>
    )
}

export default Sidebar