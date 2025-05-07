import React from 'react'
import { Save } from 'lucide-react'
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import './Rule.css'

function Rule({ sidebarOpen }) {
    return (
        <div className={`page-container ${sidebarOpen ? 'shift-right' : ''}`}>
            <header className="header">
                <div className="left">
                    {!sidebarOpen && (
                        <div className="logo">
                            <span className="chart">CHART</span>
                            <span className="maze">MAZE</span>
                        </div>
                    )}
                </div>
            </header>
            <div className='header1'>
                <h2 className='heading'>My Rule Book</h2>
                <button className="save-btn1"><Save size={18} /></button>
            </div>
            <div className='instruction'>
                <h3 className='heading1'>Instructions:</h3>
                <ul className='texts'>
                    <li>This is a dedicated page for creating your systems and principles for discipline in trading.</li>
                    <li>Document all possible outcomes (positive & negative) for your entries, exits, risk management and Situational Awareness in each section below.</li>
                    <li>Clearly mark each possibility with <SiTicktick size={14} className='tick' /> or <RxCrossCircled size={14} className='cross' /> next to the text.</li>
                    <li><span>Leverage these pre-identified patterns during journaling: </span>simply check what applies for each trade rather than rewriting everything, making your trading journal both efficient and enjoyable.</li>
                    <li>Default possibilities are provided - customize the to match your specific psychological patterns and tendencies.</li>
                </ul>
            </div>
            <div className='cards'>
                <div className={`card ${sidebarOpen ? 'shrink' : ''}`}>
                    <h2 className='awarness'>Situational Awareness</h2>
                    <div className={`line ${sidebarOpen ? 'shrink' : ''}`}></div>
                    <div className='box'>
                        <p className='boxText'>Uptrend Market</p>
                        <div className='box-icons'>
                            <SiTicktick className='boxTick' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Strong Sector</p>
                        <div className='box-icons'>
                            <SiTicktick className='boxTick' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Bad Fundamentals</p>
                        <div className='box-icons'>
                            <RxCrossCircled className='boxCross' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Correcting Market</p>
                        <div className='box-icons'>
                            <RxCrossCircled className='boxCross' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='add'>
                        <IoIosAdd className='addIcon' size={20} />
                        <p className='addText'>Add Rule</p>
                    </div>
                </div>
                <div className={`card ${sidebarOpen ? 'shrink' : ''}`}>
                    <h2 className='awarness'>Entry Triggers</h2>
                    <div className={`line ${sidebarOpen ? 'shrink' : ''}`}></div>
                    <div className='box'>
                        <p className='boxText'>Low Cheat Entry</p>
                        <div className='box-icons'>
                            <SiTicktick className='boxTick' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Horizontal BO</p>
                        <div className='box-icons'>
                            <SiTicktick className='boxTick' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Emotional Buy</p>
                        <div className='box-icons'>
                            <RxCrossCircled className='boxCross' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Tightness Breakout</p>
                        <div className='box-icons'>
                            <RxCrossCircled className='boxCross' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='add'>
                        <IoIosAdd className='addIcon' size={20} />
                        <p className='addText'>Add Rule</p>
                    </div>
                </div>
                <div className={`card ${sidebarOpen ? 'shrink' : ''}`}>
                    <h2 className='awarness'>Risk Management</h2>
                    <div className={`line ${sidebarOpen ? 'shrink' : ''}`}></div>
                    <div className='box'>
                        <p className='boxText'>SL followed</p>
                        <div className='box-icons'>
                            <SiTicktick className='boxTick' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Calculated Risk</p>
                        <div className='box-icons'>
                            <SiTicktick className='boxTick' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>SL Not followed</p>
                        <div className='box-icons'>
                            <RxCrossCircled className='boxCross' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Uncalculated Risk</p>
                        <div className='box-icons'>
                            <RxCrossCircled className='boxCross' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='add'>
                        <IoIosAdd className='addIcon' size={20} />
                        <p className='addText'>Add Rule</p>
                    </div>
                </div>
                <div className={`card ${sidebarOpen ? 'shrink' : ''}`}>
                    <h2 className='awarness'>Exit Triggers</h2>
                    <div className={`line ${sidebarOpen ? 'shrink' : ''}`}></div>
                    <div className='box'>
                        <p className='boxText'>Broke Key MAs</p>
                        <div className='box-icons'>
                            <SiTicktick className='boxTick' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Panic Sell</p>
                        <div className='box-icons'>
                            <SiTicktick className='boxTick' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Early Sell off</p>
                        <div className='box-icons'>
                            <RxCrossCircled className='boxCross' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='box'>
                        <p className='boxText'>Failed BO</p>
                        <div className='box-icons'>
                            <RxCrossCircled className='boxCross' />
                            <AiOutlineDelete className='boxDelete' />
                        </div>
                    </div>
                    <div className='add'>
                        <IoIosAdd className='addIcon' size={20} />
                        <p className='addText'>Add Rule</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rule