import React from 'react'
import { ChevronDown } from 'lucide-react'
import './Trade.css'

function Trade({ sidebarOpen }) {
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
            <div className='trades'>
                <h3 className='heading'>Add Trades</h3>
                <div className='input1'>
                    <input
                        type='text'
                        placeholder='Zerodha'
                    />
                    <ChevronDown size={16} />
                </div>
                <label className='tradebook'>Tradebook:</label>
                <div className='input2'>
                    <input
                        type='text'
                        placeholder='Choose File'
                    />
                    <p>No file chosen</p>
                </div>
                <label className='pl'>P&L Statement: (Required for Charges)</label>
                <div className='input3'>
                    <input
                        type='text'
                        placeholder='Choose File'
                    />
                    <p>No file chosen</p>
                </div>
                <button className='btn1'>Process Files</button>
                <button className='btn2'>Create Empty Tradebook</button>
                <div className='box1'>
                    <p className='text2'>Limit: Maximum 1000 trades per trade book (approx. 2MB)</p>
                </div>
            </div>
        </div>
    )
}

export default Trade
