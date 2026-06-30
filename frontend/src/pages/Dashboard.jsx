import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [rightActiveTab, setRightActiveTab] = useState('pending');
  const [stockFilter, setStockFilter] = useState('quantity');

  const styleSheet = `
    .dashboard-container {
      display: flex;
      flex-direction: column;
      gap: 24px;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      color: #1E293B;
      box-sizing: border-box;
    }
    .dashboard-header-block {
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-sizing: border-box;
    }
    .user-welcome-row {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .welcome-avatar-frame {
      width: 48px;
      height: 48px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748B;
      flex-shrink: 0;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
    }
    .welcome-avatar-icon {
      width: 24px;
      height: 24px;
    }
    .welcome-text-wrapper h1 {
      font-size: 20px;
      font-weight: 600;
      color: #0F172A;
      margin: 0;
    }
    .welcome-text-wrapper p {
      font-size: 13px;
      color: #64748B;
      margin: 2px 0 0 0;
    }
    .dashboard-tab-row {
      display: flex;
      border-bottom: 1px solid #E2E8F0;
      gap: 24px;
      box-sizing: border-box;
    }
    .dashboard-tab {
      padding: 8px 4px 12px 4px;
      font-size: 13px;
      font-weight: 500;
      color: #64748B;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: color 0.15s, border-color 0.15s;
    }
    .dashboard-tab:hover {
      color: #0F172A;
    }
    .dashboard-tab.active {
      color: #2563EB;
      border-color: #2563EB;
      font-weight: 600;
    }

    .dashboard-grid {
      display: flex;
      gap: 24px;
      box-sizing: border-box;
    }
    .grid-column-left {
      flex: 1 1 70%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      box-sizing: border-box;
      min-width: 0; /* Prevent flex blowout */
    }
    .grid-column-right {
      flex: 1 1 30%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      min-width: 280px;
    }

    .dashboard-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
    .card-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .card-title {
      font-size: 14px;
      font-weight: 600;
      color: #0F172A;
      margin: 0;
    }
    .card-dropdown-select {
      font-size: 12px;
      font-weight: 500;
      color: #2563EB;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }
    .card-dropdown-chevron {
      width: 12px;
      height: 12px;
    }

    /* Selling Items row */
    .selling-items-row {
      display: flex;
      gap: 16px;
      overflow-x: auto;
      padding-bottom: 8px;
      box-sizing: border-box;
    }
    .product-card {
      flex: 0 0 135px;
      background: #F8FAFC;
      border: 1px solid #F1F5F9;
      border-radius: 8px;
      padding: 16px 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    .product-card:hover {
      border-color: #E2E8F0;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
    }
    .product-image-placeholder {
      width: 60px;
      height: 60px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #94A3B8;
      margin-bottom: 12px;
      flex-shrink: 0;
    }
    .product-name {
      font-size: 12px;
      font-weight: 500;
      color: #475569;
      margin: 0 0 4px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
    .product-quantity {
      font-size: 14px;
      font-weight: 600;
      color: #0F172A;
      margin: 0 0 6px 0;
    }
    .product-growth {
      font-size: 10px;
      font-weight: 600;
      color: #10B981;
      display: flex;
      align-items: center;
      gap: 2px;
      background: rgba(16, 185, 129, 0.1);
      padding: 2px 6px;
      border-radius: 4px;
    }

    /* Dual widgets bottom row */
    .bottom-widgets-row {
      display: flex;
      gap: 24px;
      box-sizing: border-box;
    }
    .bottom-widget-half {
      flex: 1 1 50%;
      min-width: 0;
    }
    .filter-tabs-row {
      display: flex;
      gap: 6px;
      margin-bottom: 16px;
    }
    .filter-tab-btn {
      padding: 6px 12px;
      font-size: 11px;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid #E2E8F0;
      background: #FFFFFF;
      color: #64748B;
      transition: all 0.15s;
    }
    .filter-tab-btn.active {
      background: #3B82F6;
      border-color: #3B82F6;
      color: #FFFFFF;
    }

    /* Stocked list styling */
    .stocked-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .stocked-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .stocked-info {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
    .stocked-item-name {
      font-weight: 500;
      color: #475569;
    }
    .stocked-item-qty {
      font-weight: 600;
      color: #0F172A;
    }
    .stocked-progress-bg {
      height: 6px;
      background: #F1F5F9;
      border-radius: 3px;
      overflow: hidden;
    }
    .stocked-progress-fill {
      height: 100%;
      background: #3B82F6;
      border-radius: 3px;
    }

    /* Donut graph simulated styling */
    .channel-analytics-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 20px;
      margin-top: 10px;
      flex-wrap: wrap;
    }
    .donut-simulated-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 12px solid #F1F5F9;
      border-top-color: #3B82F6;
      border-right-color: #60A5FA;
      border-bottom-color: #93C5FD;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .donut-simulated-center-value {
      font-size: 11px;
      font-weight: 700;
      color: #0F172A;
      text-align: center;
      line-height: 1.2;
    }
    .channel-legend-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
      min-width: 140px;
    }
    .legend-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }
    .legend-label-col {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .legend-color-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .legend-val-col {
      font-weight: 600;
      color: #0F172A;
    }

    /* Right sidebar: actions & activities */
    .right-widget-tabs-row {
      display: flex;
      background: #F1F5F9;
      border-radius: 6px;
      padding: 3px;
      margin-bottom: 20px;
    }
    .right-widget-tab-btn {
      flex: 1;
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 600;
      border: none;
      background: transparent;
      color: #64748B;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.15s;
    }
    .right-widget-tab-btn.active {
      background: #FFFFFF;
      color: #0F172A;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }

    .action-sections-container {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .action-section {
      display: flex;
      flex-direction: column;
    }
    .action-section-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      margin-bottom: 12px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
    .action-section-header.sales {
      color: #F97316;
    }
    .action-section-header.purchases {
      color: #10B981;
    }
    .action-section-header svg {
      width: 14px;
      height: 14px;
    }
    .action-row-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 14px;
      background: #F8FAFC;
      border: 1px solid #F1F5F9;
      border-radius: 6px;
      margin-bottom: 8px;
      cursor: pointer;
      transition: all 0.15s;
      box-sizing: border-box;
    }
    .action-row-item:hover {
      background: #F1F5F9;
      border-color: #E2E8F0;
      transform: translateX(2px);
    }
    .action-item-left {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 500;
      color: #475569;
    }
    .action-item-chevron {
      width: 12px;
      height: 12px;
      color: #94A3B8;
    }
    .action-item-qty {
      font-size: 13px;
      font-weight: 600;
      color: #0F172A;
    }

    @media (max-width: 1150px) {
      .dashboard-grid {
        flex-direction: column;
      }
      .grid-column-right {
        flex: 1 1 100%;
      }
    }
    @media (max-width: 680px) {
      .bottom-widgets-row {
        flex-direction: column;
      }
    }
  `;

  return (
    <div className="dashboard-container">
      <style>{styleSheet}</style>

      {/* Header and Sub Tabs Row */}
      <div className="dashboard-header-block">
        <div className="user-welcome-row">
          <div className="welcome-avatar-frame">
            <svg className="welcome-avatar-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="welcome-text-wrapper">
            <h1>Hello, {user?.username || 'Demo User'}</h1>
            <p>Demo Org</p>
          </div>
        </div>

        <div className="dashboard-tab-row">
          <div 
            className={`dashboard-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </div>
          <div 
            className={`dashboard-tab ${activeTab === 'getting-started' ? 'active' : ''}`}
            onClick={() => setActiveTab('getting-started')}
          >
            Getting Started
          </div>
          <div 
            className={`dashboard-tab ${activeTab === 'updates' ? 'active' : ''}`}
            onClick={() => setActiveTab('updates')}
          >
            Recent Updates
          </div>
        </div>
      </div>

      {/* Main Grid Workspace */}
      <div className="dashboard-grid">
        
        {/* Left column items */}
        <div className="grid-column-left">
          
          {/* Top Selling Items Carousel */}
          <div className="dashboard-card">
            <div className="card-header-row">
              <h3 className="card-title">Top Selling Items</h3>
              <span className="card-dropdown-select">
                This Month
                <svg className="card-dropdown-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <div className="selling-items-row">
              <div className="product-card">
                <div className="product-image-placeholder">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="product-name">Sofa</span>
                <span className="product-quantity">247 Mtr</span>
                <span className="product-growth">
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  247%
                </span>
              </div>

              <div className="product-card">
                <div className="product-image-placeholder">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="product-name">Coffee Table</span>
                <span className="product-quantity">292 Mtr</span>
                <span className="product-growth">
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  292%
                </span>
              </div>

              <div className="product-card">
                <div className="product-image-placeholder">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="product-name">Patio Dining Set</span>
                <span className="product-quantity">210 Mtr</span>
                <span className="product-growth">
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  210%
                </span>
              </div>

              <div className="product-card">
                <div className="product-image-placeholder">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="product-name">Patio Dining Set</span>
                <span className="product-quantity">150 Mtr</span>
                <span className="product-growth">
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  150%
                </span>
              </div>

              <div className="product-card">
                <div className="product-image-placeholder">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="product-name">Storage Cabinet</span>
                <span className="product-quantity">46 Mtr</span>
                <span className="product-growth">
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  46%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Dual Column Widgets */}
          <div className="bottom-widgets-row">
            
            {/* Top Stocked Items Card */}
            <div className="dashboard-card bottom-widget-half">
              <div className="card-header-row">
                <h3 className="card-title">Top Stocked Items</h3>
                <span className="card-dropdown-select">
                  As of: This Month
                  <svg className="card-dropdown-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              <div className="filter-tabs-row">
                <button 
                  className={`filter-tab-btn ${stockFilter === 'quantity' ? 'active' : ''}`}
                  onClick={() => setStockFilter('quantity')}
                >
                  By Quantity
                </button>
                <button 
                  className={`filter-tab-btn ${stockFilter === 'value' ? 'active' : ''}`}
                  onClick={() => setStockFilter('value')}
                >
                  By Value
                </button>
              </div>

              <div className="stocked-list">
                <div className="stocked-item">
                  <div className="stocked-info">
                    <span className="stocked-item-name">Sofa</span>
                    <span className="stocked-item-qty">{stockFilter === 'quantity' ? '820 Mtr' : '$12,400'}</span>
                  </div>
                  <div className="stocked-progress-bg">
                    <div className="stocked-progress-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="stocked-item">
                  <div className="stocked-info">
                    <span className="stocked-item-name">Patio Dining Set</span>
                    <span className="stocked-item-qty">{stockFilter === 'quantity' ? '640 Mtr' : '$9,600'}</span>
                  </div>
                  <div className="stocked-progress-bg">
                    <div className="stocked-progress-fill" style={{ width: '68%', background: '#60A5FA' }}></div>
                  </div>
                </div>

                <div className="stocked-item">
                  <div className="stocked-info">
                    <span className="stocked-item-name">Storage Cabinet</span>
                    <span className="stocked-item-qty">{stockFilter === 'quantity' ? '310 Mtr' : '$4,650'}</span>
                  </div>
                  <div className="stocked-progress-bg">
                    <div className="stocked-progress-fill" style={{ width: '33%', background: '#93C5FD' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales by Channel Card */}
            <div className="dashboard-card bottom-widget-half">
              <div className="card-header-row">
                <h3 className="card-title">Sales By Channel</h3>
                <span className="card-dropdown-select">
                  This Month
                  <svg className="card-dropdown-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              <div className="channel-analytics-wrapper">
                <div className="donut-simulated-circle">
                  <div className="donut-simulated-center-value">
                    Total Sales<br />
                    <span style={{ fontSize: '12px', fontWeight: '800' }}>Rs.2,779</span>
                  </div>
                </div>

                <div className="channel-legend-list">
                  <div className="legend-item">
                    <div className="legend-label-col">
                      <span className="legend-color-dot" style={{ background: '#3B82F6' }}></span>
                      Direct Sales
                    </div>
                    <span className="legend-val-col">55%</span>
                  </div>

                  <div className="legend-item">
                    <div className="legend-label-col">
                      <span className="legend-color-dot" style={{ background: '#60A5FA' }}></span>
                      Online Store
                    </div>
                    <span className="legend-val-col">30%</span>
                  </div>

                  <div className="legend-item">
                    <div className="legend-label-col">
                      <span className="legend-color-dot" style={{ background: '#93C5FD' }}></span>
                      Distributors
                    </div>
                    <span className="legend-val-col">15%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right column items (Pending actions / Activities) */}
        <div className="grid-column-right">
          
          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="right-widget-tabs-row">
              <button 
                className={`right-widget-tab-btn ${rightActiveTab === 'pending' ? 'active' : ''}`}
                onClick={() => setRightActiveTab('pending')}
              >
                Pending Actions
              </button>
              <button 
                className={`right-widget-tab-btn ${rightActiveTab === 'activities' ? 'active' : ''}`}
                onClick={() => setRightActiveTab('activities')}
              >
                Recent Activities
              </button>
            </div>

            {rightActiveTab === 'pending' ? (
              <div className="action-sections-container">
                {/* Sales Section */}
                <div className="action-section">
                  <div className="action-section-header sales">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Sales
                  </div>

                  <div className="action-row-item">
                    <div className="action-item-left">
                      <svg className="action-item-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      To Be Packed
                    </div>
                    <span className="action-item-qty">51.000</span>
                  </div>

                  <div className="action-row-item">
                    <div className="action-item-left">
                      <svg className="action-item-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      To Be Shipped
                    </div>
                    <span className="action-item-qty">40.000</span>
                  </div>

                  <div className="action-row-item">
                    <div className="action-item-left">
                      <svg className="action-item-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      To Be Delivered
                    </div>
                    <span className="action-item-qty">52.000</span>
                  </div>

                  <div className="action-row-item">
                    <div className="action-item-left">
                      <svg className="action-item-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      To Be Invoiced
                    </div>
                    <span className="action-item-qty">97.000</span>
                  </div>
                </div>

                {/* Purchases Section */}
                <div className="action-section">
                  <div className="action-section-header purchases">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Purchases
                  </div>

                  <div className="action-row-item">
                    <div className="action-item-left">
                      <svg className="action-item-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      To Be Received
                    </div>
                    <span className="action-item-qty">62.000</span>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ padding: '20px 0', textAlign: 'center', color: '#94A3B8' }}>
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: '0 auto 12px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p style={{ fontSize: '13px' }}>No recent activity to show.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
