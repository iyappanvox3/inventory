import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  const styleSheet = `
    .login-container {
      display: flex;
      min-height: 100vh;
      width: 100vw;
      background: #FAFAFA;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    .left-panel {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 60px 80px;
      background: #FFFFFF;
      box-sizing: border-box;
    }
    .right-panel {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #0F172A 0%, #1F2937 100%);
      padding: 60px 80px;
      color: #FFFFFF;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    }
    .form-wrapper {
      width: 100%;
      max-width: 360px;
      display: flex;
      flex-direction: column;
    }
    .logo-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 40px;
    }
    .logo-icon {
      width: 22px;
      height: 22px;
      color: #0F172A;
    }
    .logo-text {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #0F172A;
    }
    .login-title {
      font-size: 24px;
      font-weight: 500;
      color: #0F172A;
      margin: 0 0 6px 0;
      letter-spacing: -0.5px;
    }
    .login-subtitle {
      font-size: 14px;
      color: #475569;
      margin: 0 0 32px 0;
      line-height: 1.5;
    }
    .form-group {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
    }
    .input-label {
      font-size: 12px;
      font-weight: 500;
      color: #475569;
      margin-bottom: 8px;
      letter-spacing: 0.3px;
    }
    .input-field {
      width: 100%;
      padding: 10px 14px;
      border-radius: 6px;
      border: 1px solid #E2E8F0;
      background: #FFFFFF;
      color: #1E293B;
      font-size: 14px;
      box-sizing: border-box;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
    }
    .input-field::placeholder {
      color: #94A3B8;
    }
    .input-field:focus {
      border-color: #0F172A;
      box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.05);
      outline: none;
    }
    .password-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .forgot-link {
      font-size: 12px;
      color: #64748B;
      text-decoration: none;
      transition: color 0.15s ease;
    }
    .forgot-link:hover {
      color: #0F172A;
    }
    .submit-btn {
      width: 100%;
      padding: 11px;
      border-radius: 6px;
      background: #0F172A;
      border: 1px solid #0F172A;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.15s ease, border-color 0.15s ease;
      margin-top: 8px;
    }
    .submit-btn:hover {
      background: #1E293B;
      border-color: #1E293B;
    }
    .submit-btn:disabled {
      background: #94A3B8;
      border-color: #94A3B8;
      cursor: not-allowed;
    }
    .error-msg {
      background: #FEF2F2;
      border: 1px solid #FCA5A5;
      padding: 10px 12px;
      border-radius: 6px;
      color: #DC2626;
      font-size: 13px;
      margin-bottom: 20px;
    }
    .login-footer {
      margin-top: 48px;
      font-size: 11px;
      color: #94A3B8;
    }
    .visual-container {
      width: 100%;
      max-width: 420px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .svg-wrapper {
      width: 320px;
      height: 320px;
      margin-bottom: 24px;
    }
    .visual-title {
      font-size: 18px;
      font-weight: 500;
      color: #FFFFFF;
      margin: 0 0 8px 0;
      letter-spacing: -0.1px;
    }
    .visual-subtitle {
      font-size: 13px;
      color: #94A3B8;
      margin: 0;
      line-height: 1.6;
    }

    @media (max-width: 900px) {
      .right-panel {
        display: none !important;
      }
      .left-panel {
        flex: 1 1 100% !important;
        padding: 40px 24px !important;
      }
    }
  `;

  return (
    <div className="login-container">
      <style>{styleSheet}</style>

      {/* Left Workspace Panel */}
      <div className="left-panel">
        <div className="form-wrapper">
          <div className="logo-wrapper">
            <svg className="logo-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="logo-text">AETHERIS</span>
          </div>

          <h2 className="login-title">Welcome back</h2>
          <p className="login-subtitle">Sign in to manage and audit your real-time inventory nodes.</p>

          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="input-label">Username</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="password-row">
                <label className="input-label">Password</label>
                <a href="#forgot" className="forgot-link" onClick={(e) => e.preventDefault()}>Forgot password?</a>
              </div>
              <input 
                type="password" 
                className="input-field" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <footer className="login-footer">
            © {new Date().getFullYear()} Aetheris Operations. All rights reserved.
          </footer>
        </div>
      </div>

      {/* Right Visual Graphic Panel */}
      <div className="right-panel">
        <div className="visual-container">
          <div className="svg-wrapper">
            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
                </pattern>
                <linearGradient id="gradient-cube-top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="gradient-cube-side" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Abstract Logistics Cubes */}
              {/* Back Left Cube */}
              <path d="M120,200 L180,170 L240,200 L180,230 Z" fill="url(#gradient-cube-side)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
              <path d="M120,200 L120,260 L180,290 L180,230 Z" fill="rgba(129, 140, 248, 0.08)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
              <path d="M180,230 L180,290 L240,260 L240,200 Z" fill="rgba(192, 132, 252, 0.03)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
              
              {/* Front Right Cube */}
              <path d="M200,240 L260,210 L320,240 L260,270 Z" fill="url(#gradient-cube-top)" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />
              <path d="M200,240 L200,300 L260,330 L260,270 Z" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
              <path d="M260,270 L260,330 L320,300 L320,240 Z" fill="rgba(129, 140, 248, 0.06)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />

              {/* Data connections / analytics lines */}
              <path d="M60,150 L180,170 L260,210 L340,180" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="180" cy="170" r="4" fill="#38bdf8" />
              <circle cx="260" cy="210" r="4" fill="#818cf8" />
              <circle cx="340" cy="180" r="3" fill="rgba(56, 189, 248, 0.5)" />

              {/* Muted status strings */}
              <text x="130" y="100" fill="rgba(255, 255, 255, 0.3)" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.8">SYSTEM_NODE_OK: 100%</text>
              <text x="130" y="120" fill="rgba(255, 255, 255, 0.3)" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.8">FLOW_ROUTING: AUTO</text>
            </svg>
          </div>
          <h3 className="visual-title">Enterprise Warehouse Orchestration</h3>
          <p className="visual-subtitle">Real-time routing, capacity planning, and complete logistics transparency across all operational nodes.</p>
        </div>
      </div>
    </div>
  );
}
