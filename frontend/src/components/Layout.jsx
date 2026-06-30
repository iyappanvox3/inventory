import { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Close dropdown on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = () => setMenuOpen(false);
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [menuOpen]);

  const styleSheet = `
    .layout-container {
      display: flex;
      min-height: 100vh;
      width: 100vw;
      background: #F8FAFC;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      color: #1E293B;
      box-sizing: border-box;
      overflow: hidden;
    }
    .sidebar {
      width: 220px;
      background: #181D2E;
      color: #94A3B8;
      display: flex;
      flex-direction: column;
      border-right: 1px solid #232A3E;
      transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      flex-shrink: 0;
      box-sizing: border-box;
    }
    .sidebar.collapsed {
      width: 70px;
    }
    .sidebar-header {
      height: 54px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 12px;
      border-bottom: 1px solid #232A3E;
      overflow: hidden;
      box-sizing: border-box;
    }
    .sidebar-logo {
      width: 24px;
      height: 24px;
      color: #38BDF8;
      flex-shrink: 0;
    }
    .sidebar-title {
      font-size: 15px;
      font-weight: 700;
      color: #F8FAFC;
      letter-spacing: 1px;
      white-space: nowrap;
    }
    .sidebar-menu {
      flex: 1;
      padding: 20px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      overflow-y: auto;
      box-sizing: border-box;
    }
    .menu-item {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      border-radius: 6px;
      color: #94A3B8;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      gap: 10px;
      transition: background-color 0.15s ease, color 0.15s ease;
      white-space: nowrap;
      box-sizing: border-box;
    }
    .menu-item:hover {
      background: #232A3E;
      color: #F8FAFC;
    }
    .menu-item.active {
      background: #2563EB;
      color: #FFFFFF;
    }
    .menu-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
    .menu-label {
      transition: opacity 0.2s;
    }
    .sidebar.collapsed .menu-label {
      display: block;
      opacity: 1;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 9px;
      font-weight: 500;
      max-width: 100%;
      text-align: center;
    }
    .sidebar.collapsed .sidebar-header {
      justify-content: center;
      padding: 0;
    }
    .sidebar.collapsed .menu-item {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 8px 4px;
      gap: 4px;
      border-radius: 6px;
    }
    .sidebar.collapsed .menu-icon {
      width: 18px;
      height: 18px;
    }
    .sidebar-footer {
      padding: 16px 12px;
      border-top: 1px solid #232A3E;
      display: flex;
      flex-direction: column;
      gap: 12px;
      box-sizing: border-box;
    }
    .onboarding-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(37, 99, 235, 0.15);
      border: 1px dashed rgba(37, 99, 235, 0.3);
      padding: 8px 12px;
      border-radius: 6px;
      color: #60A5FA;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      box-sizing: border-box;
    }
    .onboarding-dot {
      width: 6px;
      height: 6px;
      background: #3B82F6;
      border-radius: 50%;
      box-shadow: 0 0 8px #3B82F6;
      flex-shrink: 0;
    }
    .collapse-bar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .sidebar.collapsed .collapse-bar {
      justify-content: center;
    }
    .collapse-btn {
      background: transparent;
      border: none;
      color: #64748B;
      cursor: pointer;
      padding: 6px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .collapse-btn:hover {
      background: #232A3E;
      color: #F8FAFC;
    }

    .main-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-sizing: border-box;
    }

    .topbar {
      height: 54px;
      background: #FFFFFF;
      border-bottom: 1px solid #E2E8F0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    .topbar-left {
      display: flex;
      align-items: center;
      gap: 16px;
      flex: 1;
      max-width: 480px;
    }
    .recent-activity-btn {
      background: transparent;
      border: none;
      color: #64748B;
      cursor: pointer;
      padding: 6px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.15s, color 0.15s;
    }
    .recent-activity-btn:hover {
      background: #F1F5F9;
      color: #0F172A;
    }
    .search-wrapper {
      position: relative;
      width: 100%;
    }
    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      color: #94A3B8;
    }
    .search-input {
      width: 100%;
      padding: 8px 12px 8px 36px;
      border-radius: 6px;
      border: 1px solid #E2E8F0;
      background: #F8FAFC;
      color: #1E293B;
      font-size: 13px;
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.15s ease, background-color 0.15s ease;
    }
    .search-input:focus {
      border-color: #CBD5E1;
      background: #FFFFFF;
    }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .org-info {
      font-size: 12px;
      color: #64748B;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .org-badge {
      background: #EFF6FF;
      border: 1px solid #DBEAFE;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 600;
      color: #2563EB;
      white-space: nowrap;
    }
    .org-selector {
      font-size: 13px;
      font-weight: 500;
      color: #475569;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }
    .org-chevron {
      width: 14px;
      height: 14px;
      color: #94A3B8;
    }
    .quick-add-btn {
      width: 32px;
      height: 32px;
      background: #2563EB;
      border: none;
      color: #FFFFFF;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 400;
      cursor: pointer;
      transition: background-color 0.15s ease;
    }
    .quick-add-btn:hover {
      background: #1D4ED8;
    }
    .utility-icon-btn {
      background: transparent;
      border: none;
      color: #64748B;
      cursor: pointer;
      padding: 6px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.15s;
    }
    .utility-icon-btn:hover {
      background: #F1F5F9;
      color: #0F172A;
    }
    .profile-container {
      position: relative;
      display: inline-block;
    }
    .profile-avatar-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #F1F5F9;
      color: #475569;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid #E2E8F0;
      box-sizing: border-box;
    }
    .profile-avatar-btn:hover {
      background: #E2E8F0;
    }
    .profile-dropdown {
      position: absolute;
      top: 40px;
      right: 0;
      width: 200px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
      padding: 6px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 2px;
      box-sizing: border-box;
    }
    .dropdown-header {
      padding: 8px 12px;
      border-bottom: 1px solid #F1F5F9;
      margin-bottom: 4px;
    }
    .dropdown-username {
      font-size: 13px;
      font-weight: 600;
      color: #0F172A;
    }
    .dropdown-email {
      font-size: 11px;
      color: #64748B;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .dropdown-btn {
      width: 100%;
      padding: 8px 12px;
      background: transparent;
      border: none;
      color: #EF4444;
      font-size: 13px;
      font-weight: 500;
      text-align: left;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      box-sizing: border-box;
      transition: background-color 0.15s;
    }
    .dropdown-btn:hover {
      background: #FEF2F2;
    }
    .content-pane {
      flex: 1;
      overflow-y: auto;
      background: #F8FAFC;
      box-sizing: border-box;
      padding: 24px 32px;
    }

    @media (max-width: 900px) {
      .sidebar {
        position: absolute;
        height: 100vh;
        z-index: 999;
      }
      .sidebar.collapsed {
        width: 0;
        border-right: none;
        overflow: hidden;
      }
    }
  `;

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  return (
    <div className="layout-container">
      <style>{styleSheet}</style>

      {/* Left Sidebar Menu */}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <svg className="sidebar-logo" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          {!collapsed && <span className="sidebar-title">Inventory</span>}
        </div>

        <nav className="sidebar-menu">
          <NavLink to="/" end className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
            <svg className="menu-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="menu-label">Home</span>
          </NavLink>

          <NavLink to="/items" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
            <svg className="menu-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="menu-label">Items</span>
          </NavLink>

          <NavLink to="/inventory" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
            <svg className="menu-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="menu-label">Inventory</span>
          </NavLink>

          <NavLink to="/sales" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
            <svg className="menu-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="menu-label">Sales</span>
          </NavLink>

          <NavLink to="/purchases" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
            <svg className="menu-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="menu-label">Purchases</span>
          </NavLink>

          <NavLink to="/reports" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
            <svg className="menu-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
            </svg>
            <span className="menu-label">Reports</span>
          </NavLink>

          <NavLink to="/documents" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}>
            <svg className="menu-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="menu-label">Documents</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          {/* <div className="onboarding-btn">
            <span className="onboarding-dot"></span>
            {!collapsed && <span className="menu-label">LIVE GUIDED ONBOARDING</span>}
          </div> */}

          <div className="collapse-bar">
            <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)} title={collapsed ? 'Expand menu' : 'Collapse menu'}>
              <svg className="menu-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {collapsed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Right Content Panel */}
      <div className="main-wrapper">
        <header className="topbar">
          <div className="topbar-left">
            <button className="recent-activity-btn" title="Recent Activity">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div className="search-wrapper">
              <svg className="search-icon" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" className="search-input" placeholder="Search in Aetheris..." />
            </div>
          </div>

          <div className="topbar-right">
            <div className="org-info">
              <span className="org-badge">Test Organization</span>
              <span className="org-selector">
                Demo Org
                <svg className="org-chevron" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <button className="quick-add-btn" title="Quick Add">+</button>

            <button className="utility-icon-btn" title="Invite User">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </button>

            <button className="utility-icon-btn" title="Notifications">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <button className="utility-icon-btn" title="Settings">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {/* Profile Dropdown Trigger */}
            <div className="profile-container">
              <button className="profile-avatar-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {getInitial(user?.username)}
              </button>
              {menuOpen && (
                <div className="profile-dropdown">
                  <div className="dropdown-header">
                    <div className="dropdown-username">{user?.username}</div>
                    <div className="dropdown-email">{user?.email || 'admin@aetheris.com'}</div>
                  </div>
                  <button className="dropdown-btn" onClick={handleLogout}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="content-pane">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
