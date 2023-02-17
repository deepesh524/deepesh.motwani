import './App.css';
import ParticleComponent from './components/particles/particles';
import Sidebar from './components/sidebar/sidebar';
import MeMyselfAndI from './pages/meMyselfAndI';
import PortfolioPage from './pages/portfolio';
export const getMarginLeft = (int) => {
    return String(int)+'%'
}

function App() {
    
    return (
        <div>
            <Sidebar/>
            <div className='aboutContainer'>
                <ParticleComponent/>
                <div className='foregroundImage'>
                    <br/>
                    <div className='htmlTags'>{'<html>'}</div>
                    <div className='htmlTags' style={{marginLeft:getMarginLeft(3)}}>{'<body>'}</div>
                    <br/>
                    <br/>
                    <div className='htmlTags' style={{marginLeft:getMarginLeft(6)}}>{'<h1>'}</div>
                    <div style={{marginLeft:getMarginLeft(8)}}>
                        <div className='introText'>
                            {Array.from('Hi,').map((item,index)=>{
                                return <div id={'firstLineIndex'+index} onMouseOver={()=>{document.getElementById('firstLineIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  onMouseLeave={()=>{setTimeout(()=>{document.getElementById('firstLineIndex'+index).style.animation = ''}, 400);}} key={index} className='dancingCharacter'>
                                            {item}
                                        </div>
                            })}
                        </div>
                        <div className='introText'>
                            <div style={{display:'flex',alignItems:'flex-end'}}>
                                {Array.from("I'm").map((item,index)=>{
                                    return <div id={'secondLineFirstWordIndex'+index} key={index} className='dancingCharacter'
                                                onMouseOver={()=>{document.getElementById('secondLineFirstWordIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  
                                                onMouseLeave={()=>{setTimeout(()=>{document.getElementById('secondLineFirstWordIndex'+index).style.animation = ''}, 400);}} 
                                                >
                                            {item}
                                            </div>
                                })}
                            </div>
                            <div style={{display:'flex',alignItems:'flex-end',paddingLeft:'25px'}}>
                                {Array.from("Deepesh").map((item,index)=>{
                                    return <div id={'secondLineSecondWordIndex'+index} key={index} className='dancingCharacter'
                                                onMouseOver={()=>{document.getElementById('secondLineSecondWordIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  
                                                onMouseLeave={()=>{setTimeout(()=>{document.getElementById('secondLineSecondWordIndex'+index).style.animation = ''}, 400);}} 
                                                >
                                                {item}
                                            </div>
                                })}
                            </div>
                            <div style={{display:'flex',alignItems:'flex-end',paddingLeft:'25px'}}>
                                {Array.from("Motwani,").map((item,index)=>{
                                    return <div id={'secondLineThirdWordIndex'+index} key={index} className='dancingCharacter'
                                                onMouseOver={()=>{document.getElementById('secondLineThirdWordIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  
                                                onMouseLeave={()=>{setTimeout(()=>{document.getElementById('secondLineThirdWordIndex'+index).style.animation = ''}, 400);}} 
                                                >
                                                    {item}
                                                </div>
                                })}
                            </div>
                            
                        </div>
                        <div className='introText'>
                            <div style={{display:'flex',alignItems:'flex-end'}}>
                                {Array.from("web").map((item,index)=>{
                                    return <div id={'thirdLineFirstWordIndex'+index} key={index} className='dancingCharacter'
                                                onMouseOver={()=>{document.getElementById('thirdLineFirstWordIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  
                                                onMouseLeave={()=>{setTimeout(()=>{document.getElementById('thirdLineFirstWordIndex'+index).style.animation = ''}, 400);}} 
                                                >
                                        {item}
                                        </div>
                                })}
                            </div>
                            <div style={{display:'flex',alignItems:'flex-end',paddingLeft:'25px'}}>
                                {Array.from("developer").map((item,index)=>{
                                    return <div id={'thirdLineSecondWordIndex'+index} key={index} className='dancingCharacter'
                                                onMouseOver={()=>{document.getElementById('thirdLineSecondWordIndex'+index).style.animation = 'dancingAnimation 0.5s forwards'}}  
                                                onMouseLeave={()=>{setTimeout(()=>{document.getElementById('thirdLineSecondWordIndex'+index).style.animation = ''}, 400);}} 
                                                >
                                        {item}
                                        </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='htmlTags' style={{marginLeft:getMarginLeft(6)}}>{'</h1>'}</div>
                    <div className='htmlTags' style={{marginLeft:getMarginLeft(6)}}>{'<p>'}</div>
                    <div className='tagLine' style={{marginLeft:getMarginLeft(8)}}>Frontend End Developer / Web Designer</div>
                    <div className='htmlTags' style={{marginLeft:getMarginLeft(6)}}>{'</p>'}</div>
                    <div style={{marginLeft:getMarginLeft(6),marginTop:'50px'}}>
                        <a href="/buttons/41" className="contactButton-unhovered contactButton">
                            Contact Me!
                        </a>
                    </div>
                    <div className='scrollDownText'>
                        <div className='scrollDownTextAnimation'>Scroll Down</div>
                        <div style={{marginTop:'15px'}}>&rarr;</div>
                    </div>
                    <div className='scrollDownText' style={{right:'20px'}}>
                        <div className='scrollDownTextAnimation'>Scroll Down</div>
                        <div style={{marginTop:'15px'}}>&rarr;</div>
                    </div>
                </div>
            </div>
            <div style={{minHeight:'100vh'}}>
                <PortfolioPage/>
            </div>
            <div>
                <MeMyselfAndI/>
            </div>
        </div>
    );
}

export default App;
