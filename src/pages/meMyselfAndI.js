import React from 'react'
import { getMarginLeft } from '../App';
import '../css/portfolio.css';
import '../css/meMyselfAndI.css';
import '../App.css';
import SphereOfWords from '../components/sphereOfWords/sphereOfWords';

const MeMyselfAndI = () => {
    const data = [
        { value: 'JavaScript', count: 38 },
        { value: 'React', count: 30 },
        { value: 'Nodejs', count: 28 },
        { value: 'Express.js', count: 25 },
        { value: 'HTML5', count: 33 },
        { value: 'MongoDB', count: 18 },
        { value: 'CSS3', count: 20 },
        { value: 'Python', count: 38 },
        { value: 'Apktool', count: 28 },
        { value: 'Jadx', count: 25 },
        { value: 'REST', count: 25 },
        { value: 'npm', count: 25 },
        { value: 'Node', count: 25 },
        { value: 'PHP', count: 25 },
        { value: 'Photography', count: 25 },
        { value: 'Drone Pilot', count: 25 },
    ]
    return (
        <div id='about' className='portfolioContainer'>
            <div className='htmlTags' style={{marginLeft:getMarginLeft(7)}}>
                {'<h2>'}
            </div>
            <div className='introText' style={{color:'rgb(0,226,255)',fontSize:'5vw',marginLeft:getMarginLeft(9),marginTop:'0px'}} >
                <div style={{display:'flex',alignItems:'flex-end'}}>
                    {Array.from('Me,Myself').map((item,index)=>{
                        return <div id={'meFirstLineIndex'+index} onMouseOver={()=>{document.getElementById('meFirstLineIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  onMouseLeave={()=>{setTimeout(()=>{document.getElementById('meFirstLineIndex'+index).style.animation = ''}, 400);}} key={index} className='dancingCharacterBase'>
                                    {item}
                                </div>
                    })}
                </div>


                <div style={{display:'flex',alignItems:'flex-end',paddingLeft:'10px'}}>
                    {Array.from('And').map((item,index)=>{
                        return <div id={'andSecondLineIndex'+index} onMouseOver={()=>{document.getElementById('andSecondLineIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  onMouseLeave={()=>{setTimeout(()=>{document.getElementById('andSecondLineIndex'+index).style.animation = ''}, 400);}} key={index} className='dancingCharacterBase'>
                                    {item}
                                </div>
                    })}
                </div>

                <div style={{display:'flex',alignItems:'flex-end',paddingLeft:'10px'}}>
                    {Array.from('I').map((item,index)=>{
                        return <div id={'iSecondLineIndex'+index} onMouseOver={()=>{document.getElementById('iSecondLineIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  onMouseLeave={()=>{setTimeout(()=>{document.getElementById('iSecondLineIndex'+index).style.animation = ''}, 400);}} key={index} className='dancingCharacterBase'>
                                    {item}
                                </div>
                    })}
                </div>
            </div>
            <div className='htmlTags' style={{marginLeft:getMarginLeft(7)}}>
                {'</h2>'}
            </div>
            <div className='meMyselfDesc' style={{marginLeft:getMarginLeft(7)}}>
                <div style={{width:'50%'}}>
                    <div className='htmlTags'>
                        {'<p>'}
                    </div>
                    <div className='para'  style={{marginLeft:getMarginLeft(2)}}>
                        Since Adobe Flash was a complete innovation, alongside with CSS 1.0 and HTML 4.01 as standards of the current web I've been passionate about web.
                        <br/>
                        <br/>
                        For over a decade I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.
                    </div>
                    <div className='htmlTags'>
                        {'</p>'}
                    </div>
                    <div className='htmlTags' style={{marginLeft:getMarginLeft(2),marginTop:'20px'}}>
                        {'<section>'}
                    </div>

                    <div className='htmlTags' style={{marginLeft:getMarginLeft(2),marginTop:'10px'}}>
                        {'</section>'}
                    </div>
                </div>
                <div style={{minHeight:'500px',marginTop:'-75px'}}>
                    <SphereOfWords
                    data = {data}
                    />
                </div>

            </div>

            <div className='portfolioBgMask'>ABOUT<br/> ME</div>

        </div>
    )
}

export default MeMyselfAndI