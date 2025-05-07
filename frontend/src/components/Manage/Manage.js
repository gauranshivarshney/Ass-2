import React from 'react'
import './Manage.css'
import { IoIosAdd } from "react-icons/io";
import { CalendarDays, ChevronDown } from 'lucide-react';

function Manage({ sidebarOpen }) {
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
                        <h2 className='title1'>Manage Trades</h2>
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
                <div className='manage-items'>
                    <div>
                        <input
                            type='text'
                            placeholder='Search by symbol...'
                            className='search'
                        />
                    </div>
                    <div className='item2'>
                        <p>Sell Dates:</p>
                        <div className='dates3'>
                            <input type="text" placeholder="Select Date Range" className='date-range' />
                            <CalendarDays size={16} className='calendar1' />
                        </div>
                    </div>
                    <div className='item3'>
                        <p className='sl'>SL (%):</p>
                        <input
                            type='number'
                            placeholder='5'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage