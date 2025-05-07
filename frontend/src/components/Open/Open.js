import React from 'react'
import './Open.css'
import { IoIosAdd } from "react-icons/io";
import { ChevronDown } from 'lucide-react';

function Open({ sidebarOpen }) {
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
            <div className='manage'>
                <div className='manage-trades'>
                    <div className='left-side'>
                        <h2 className='title1'>Open Positions</h2>
                        <IoIosAdd className='add1' />
                    </div>
                    <div className="right">
                        <label>Load:</label>
                        <div className="dropdown">
                            <span> </span>
                            <ChevronDown size={16} />
                        </div>
                    </div>
                </div>
                <input
                    type='text'
                    placeholder='Search symbol...'
                    className='search'
                />
                <label className='dates1'>Initial Total Capital:</label>
                <div className='dates2'>
                    <input type="text" placeholder="Enter portfolio"
                    />
                </div>
            </div>
        </div>
    )
}

export default Open