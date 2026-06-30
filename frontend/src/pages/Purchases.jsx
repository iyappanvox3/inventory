export default function Purchases() {
  return (
    <div style={{ padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>Purchase Orders</h2>
      <p style={{ color: '#475569', fontSize: '14px', marginBottom: '24px' }}>Log supplier invoices, purchase orders, and incoming warehouse stock.</p>
      
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '40px', textAlign: 'center', color: '#64748B' }}>
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: '0 auto 16px', color: '#94A3B8' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0F172A', marginBottom: '4px' }}>No purchase orders</h3>
        <p style={{ fontSize: '13px', color: '#94A3B8', maxWidth: '320px', margin: '0 auto 20px' }}>Initiate a purchase order to supply items from your distributors.</p>
        <button style={{ background: '#2563EB', border: 'none', color: '#FFFFFF', padding: '10px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>+ Request Purchase</button>
      </div>
    </div>
  );
}
