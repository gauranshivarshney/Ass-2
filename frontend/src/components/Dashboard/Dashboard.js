import React from 'react'
import './Dashboard.css'
import { CalendarDays, ChevronDown } from 'lucide-react';
import { FaEdit } from "react-icons/fa";

function Dashboard({ sidebarOpen }) {
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
      <div className='dashboard'>
        <p className='title1'>Dashboard</p>
        <div className='header2'>
          <div className='sell-date'>
            <p className='para'>Sell Dates</p>
            <div className='sell-input'>
              <input
                type='text'
                placeholder='Select Date Range'
              />
                <CalendarDays size={16} className='icon' />
            </div>
          </div>
          <div className="right2">
            <label>Load:</label>
            <div className="dropdown2">
              <span> </span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
        <div className='boxes'>
          <div className={`box2 ${sidebarOpen ? 'shrink' : ''}`}>
            <h2 className='trading'>Trading Statistics</h2>
            <p>Total Trades</p>
            <p className='o'>0</p>
            <p className='t'>Winning Trades</p>
            <p className='o o2'>0</p>
            <p className='t'>Losing Trades</p>
            <p className='o o3'>0</p>
            <p className='t'>Unknown Trades</p>
            <p className='o'>0</p>
            <p className='t'>Win Rate</p>
            <p className='o'>0%</p>
          </div>
          <div className={`box2 ${sidebarOpen ? 'shrink' : ''}`}>
            <h2 className='profit-heading'>Profit/Loss Statistics</h2>
            <div className='profit-box'>
              <div>
                <p>Net P&L Value</p>
                <p className='t1'>0</p>
              </div>
              <div>
                <p>NIFTY 50 Return</p>
                <p className='t2'>N/A</p>
              </div>
              <div>
                <p className='p'>Average Win %</p>
                <p className='t1'>0</p>
              </div>
              <div>
                <p className='p'>Average Loss %</p>
                <p className='t3'>0</p>
              </div>
              <div>
                <p className='p'>Biggest Win Value %</p>
                <p className='t1'>0 / 0%</p>
              </div>
              <div>
                <p className='p'>Biggest Loss Value %</p>
                <p className='t3'>0 / 0 %</p>
              </div>
            </div>
          </div>
          <div className={`box2 ${sidebarOpen ? 'shrink' : ''}`}>
            <div className='charges-card'>
              <h2 className='charge-text'>Charges</h2>
              <FaEdit className='charge-icon' />
            </div>
            <p>Total Charges</p>
            <p className='o'>0.00</p>
            <div className='card2'>
              <div>
                <p>Brokerage</p>
                <p className='n'>N/A</p>
              </div>
              <div>
                <p>GST</p>
                <p className='n'>N/A</p>
              </div>
              <div>
                <p className='p1'>STT</p>
                <p className='n'>N/A</p>
              </div>
              <div>
                <p className='p1'>SEBI Charges</p>
                <p className='n'>N/A</p>
              </div>
              <div>
                <p className='p1'>Exchange Charges</p>
                <p className='n'>N/A</p>
              </div>
              <div>
                <p className='p1'>Stamp Duty</p>
                <p className='n'>N/A</p>
              </div>
              <div>
                <p className='p1'>IPFT</p>
                <p className='n'>N/A</p>
              </div>
              <div>
                <p className='p1'>Other Charges</p>
                <p className='n'>N/A</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;