import React from 'react'
import { getMarginLeft } from '../App';
import '../css/portfolio.css';
import '../css/meMyselfAndI.css';
import '../App.css';
import SphereOfWords from '../components/sphereOfWords/sphereOfWords';

const ContactMe = () => {
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
                    {Array.from('Get').map((item,index)=>{
                        return <div id={'contactFirstLineIndex'+index} onMouseOver={()=>{document.getElementById('contactFirstLineIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  onMouseLeave={()=>{setTimeout(()=>{document.getElementById('contactFirstLineIndex'+index).style.animation = ''}, 400);}} key={index} className='dancingCharacterBase'>
                                    {item}
                                </div>
                    })}
                </div>

                <div style={{display:'flex',alignItems:'flex-end',paddingLeft:'10px'}}>
                    {Array.from('In').map((item,index)=>{
                        return <div id={'contactMiddleLineIndex'+index} onMouseOver={()=>{document.getElementById('contactMiddleLineIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  onMouseLeave={()=>{setTimeout(()=>{document.getElementById('contactMiddleLineIndex'+index).style.animation = ''}, 400);}} key={index} className='dancingCharacterBase'>
                                    {item}
                                </div>
                    })}
                </div>

                <div style={{display:'flex',alignItems:'flex-end',paddingLeft:'10px'}}>
                    {Array.from('Touch').map((item,index)=>{
                        return <div id={'contactSecondLineIndex'+index} onMouseOver={()=>{document.getElementById('contactSecondLineIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  onMouseLeave={()=>{setTimeout(()=>{document.getElementById('contactSecondLineIndex'+index).style.animation = ''}, 400);}} key={index} className='dancingCharacterBase'>
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
                    <div className='htmlTags' >
                        {'<p>'}
                    </div>
                    <div className='para'  style={{marginLeft:getMarginLeft(2)}}>
                        I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.

                    </div>
                    <div className='htmlTags'>
                        {'</p>'}
                    </div>
                    <div className='htmlTags' style={{marginTop:'20px'}}>
                        {'<form>'}
                    </div>

                    <div className='htmlTags' style={{marginTop:'10px'}}>
                        {'</form>'}
                    </div>
                </div>

            </div>

            <div className='portfolioBgMask'>@</div>

        </div>
    )
}

export default ContactMe