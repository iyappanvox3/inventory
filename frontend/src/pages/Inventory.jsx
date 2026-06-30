export default function Inventory() {
  return (
    <div style={{ padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>Inventory Adjustments</h2>
      <p style={{ color: '#475569', fontSize: '14px', marginBottom: '24px' }}>Track material transfers, stock checks, and inventory status nodes.</p>
      
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '40px', textAlign: 'center', color: '#64748B' }}>
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: '0 auto 16px', color: '#94A3B8' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0F172A', marginBottom: '4px' }}>No stock active</h3>
        <p style={{ fontSize: '13px', color: '#94A3B8', maxWidth: '320px', margin: '0 auto 20px' }}>Register warehouse details to track and allocate batch levels.</p>
        <button style={{ background: '#2563EB', border: 'none', color: '#FFFFFF', padding: '10px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>+ Register Warehouse</button>
      </div>
    </div>
  );
}
