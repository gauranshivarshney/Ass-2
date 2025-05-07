import React, { useState } from 'react';
import './TradeDiary.css';
import { Save, ChevronDown, LayoutGrid, TrendingUp, CalendarDays } from 'lucide-react';

export default function TradeDiary({ sidebarOpen }) {
    const [activeTab, setActiveTab] = useState('Trades');

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
            <div className="top-bar">
                <div className="tab-toggle">
                    <div
                        className={`tab-btn ${activeTab === 'Trades' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Trades')}
                    >
                        <LayoutGrid size={20} className="icon" />
                        <span>Trades</span>
                    </div>
                    <div
                        className={`tab-btn ${activeTab === 'Summary' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Summary')}
                    >
                        <TrendingUp size={20} className="icon" />
                        <span>Summary</span>
                    </div>
                </div>
                <div className="right">
                    <label>Load:</label>
                    <div className="dropdown">
                        <span> </span>
                        <ChevronDown size={16} />
                    </div>
                </div>
            </div>
            <div className="tab-content">
                {activeTab === 'Trades' ? (
                    <>
                        <div className="controls">
                            <div className="row">
                                <label className='sell'>Sell Dates</label>
                                <div className='dates'>
                                    <input type="text" placeholder="Select Date Range" />
                                    <CalendarDays size={16} className='calendar' />
                                </div>
                            </div>
                            <div className="row">
                                <label className='sell'>Initial Total Capital:</label>
                                <input type="text" placeholder="Enter portfolio" />
                                <button className="save-btn"><Save size={18} /></button>
                            </div>
                            <div className="row">
                                <label className='sell'>Sort:</label>
                                <select>
                                    <option>Date (Newest First)</option>
                                </select>
                                <input className="search" placeholder="Search Trades by Symbol..." />
                            </div>
                        </div>
                        <div className="nodata">No Data Found</div>
                    </>
                ) : (
                    <div className={`summary-section ${sidebarOpen} ? 'width-sidebar : 'no-sidebar`}>
                        <div className='summary'>
                            <h2>Situational Awareness Analysis</h2>
                            <div className='line1'>
                                <div>Good</div>
                                <div>Bad</div>
                                <div>Unkown</div>
                            </div>
                            <div className='line2'>
                                <div className='na1'>N/A</div>
                                <div className='na2'>N/A</div>
                                <div>N/A</div>
                            </div>
                        </div>
                        <div className='summary'>
                            <h2>Entry Trigger Analysis</h2>
                            <div className='line1'>
                                <div>Good</div>
                                <div>Bad</div>
                                <div>Unkown</div>
                            </div>
                            <div className='line2'>
                                <div className='na1'>N/A</div>
                                <div className='na2'>N/A</div>
                                <div>N/A</div>
                            </div>
                        </div>
                        <div className='summary'>
                            <h2>Risk Management Analysis</h2>
                            <div className='line1'>
                                <div>Good</div>
                                <div>Bad</div>
                                <div>Unkown</div>
                            </div>
                            <div className='line2'>
                                <div className='na1'>N/A</div>
                                <div className='na2'>N/A</div>
                                <div>N/A</div>
                            </div>
                        </div>
                        <div className='summary'>
                            <h2>Exit Trigger Analysis</h2>
                            <div className='line1'>
                                <div>Good</div>
                                <div>Bad</div>
                                <div>Unkown</div>
                            </div>
                            <div className='line2'>
                                <div className='na1'>N/A</div>
                                <div className='na2'>N/A</div>
                                <div>N/A</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
