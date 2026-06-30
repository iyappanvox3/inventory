export default function Reports() {
  return (
    <div style={{ padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>Reports & Insights</h2>
      <p style={{ color: '#475569', fontSize: '14px', marginBottom: '24px' }}>Review inventory valuation, sales reports, and turnover metrics.</p>
      
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '40px', textAlign: 'center', color: '#64748B' }}>
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: '0 auto 16px', color: '#94A3B8' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
        </svg>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0F172A', marginBottom: '4px' }}>No reports generated</h3>
        <p style={{ fontSize: '13px', color: '#94A3B8', maxWidth: '320px', margin: '0 auto 20px' }}>Log order logs and items to generate real-time turnover charts.</p>
        <button style={{ background: '#2563EB', border: 'none', color: '#FFFFFF', padding: '10px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>Generate Custom Report</button>
      </div>
    </div>
  );
}
