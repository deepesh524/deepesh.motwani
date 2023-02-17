import React from 'react'
import { getMarginLeft } from '../App';
import '../css/portfolio.css';
import '../App.css';
import Rosseaux from '../img/portfolio_projects/Rosseaux.png';
import RewardPro from '../img/portfolio_projects/RewardPro.png';
import Appsatitate from '../img/portfolio_projects/Appsatitate.png';
import Apssuccessor from '../img/portfolio_projects/Apssuccessor.png';
import Mobiaviator from '../img/portfolio_projects/Mobiaviator.png';
import Appanalytics from '../img/portfolio_projects/Appanalytics.png';
import AdminPanel from '../img/portfolio_projects/AdminPanel.png';
import AffiliatePanel from '../img/portfolio_projects/AffiliatePanel.png';

const PortfolioPage = () => {
    var projectList = [
        {label:'Rosseaux',img_src:Rosseaux},
        {label:'RewardPro',img_src:RewardPro,offset:"10% 0%"},
        {label:'Appsatiate',img_src:Appsatitate,offset:"15% 0%"},
        {label:'Appsuccessor',img_src:Apssuccessor,offset:"20% 0%"},
        {label:'Mobiaviator',img_src:Mobiaviator,offset:"20% 0%"},
        {label:'Appanalytics',img_src:Appanalytics,offset:"10% 0%"},
        {label:'Affiliate Marketing - Affiliate Panel',img_src:AffiliatePanel},
        {label:'Affiliate Marketing - Admin Panel',img_src:AdminPanel,offset:"37% 0%"},
    ]
    return (
        <div className='portfolioContainer'>
            <div className='htmlTags' style={{marginLeft:getMarginLeft(9)}}>
                {'<h2>'}
            </div>
            <div className='introText' style={{color:'rgb(0,226,255)',fontSize:'5vw',marginLeft:'140px',marginTop:'0px'}} >
                <div style={{display:'flex',alignItems:'flex-end'}}>
                    {Array.from('My').map((item,index)=>{
                        return <div id={'portfolioFirstLineIndex'+index} onMouseOver={()=>{document.getElementById('portfolioFirstLineIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  onMouseLeave={()=>{setTimeout(()=>{document.getElementById('portfolioFirstLineIndex'+index).style.animation = ''}, 400);}} key={index} className='dancingCharacterBase'>
                                    {item}
                                </div>
                    })}
                </div>

                <div style={{display:'flex',alignItems:'flex-end',paddingLeft:'10px'}}>
                    {Array.from('Portfolio').map((item,index)=>{
                        return <div id={'portfolioSecondLineIndex'+index} onMouseOver={()=>{document.getElementById('portfolioSecondLineIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  onMouseLeave={()=>{setTimeout(()=>{document.getElementById('portfolioSecondLineIndex'+index).style.animation = ''}, 400);}} key={index} className='dancingCharacterBase'>
                                    {item}
                                </div>
                    })}
                </div>
            </div>
            <div className='htmlTags' style={{marginLeft:getMarginLeft(9)}}>
                {'</h2>'}
            </div>
            <div className='htmlTags' style={{marginLeft:getMarginLeft(9)}}>
                {'<p>'}
            </div>
            <div className='para'  style={{marginLeft:getMarginLeft(11),width:'50%'}}>
                A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.
                <br/>
                Interested to see some more? Visit my <a href='/12' style={{color:'rgb(0,226,255)'}}>work page</a>.
            </div>
            <div className='htmlTags' style={{marginLeft:getMarginLeft(9)}}>
                {'</p>'}
            </div>

            <div className='htmlTags' style={{marginLeft:getMarginLeft(7),marginTop:'20px'}}>
                {'<section>'}
            </div>
            <div className='portfolioProjects'>
                {projectList.map((item,index)=>{
                    return <div key={index} className='portfolioProjectItem'>
                        {/* {item.label} */}
                        <img src={item.img_src} className='portfolioProjectCover' style={{objectPosition:(item.offset ? item.offset : '0% 0%')}} alt={item.label} height='100%' width='100%'>
                        </img>
                        <div className='portfolioProjectItemHover'>
                            <div className='portfolioBlueButton'>
                                View <br/>Project
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <div className='htmlTags' style={{marginLeft:getMarginLeft(7),marginTop:'10px'}}>
                {'</section>'}
            </div>
            <div className='portfolioBgMask'>WORK</div>

        </div>
    )
}

export default PortfolioPage