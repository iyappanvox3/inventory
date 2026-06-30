export default function Items() {
  return (
    <div style={{ padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>Items Module</h2>
      <p style={{ color: '#475569', fontSize: '14px', marginBottom: '24px' }}>Maintain product catalogs, SKU details, and baseline categories.</p>
      
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '40px', textAlign: 'center', color: '#64748B' }}>
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: '0 auto 16px', color: '#94A3B8' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0F172A', marginBottom: '4px' }}>No items added yet</h3>
        <p style={{ fontSize: '13px', color: '#94A3B8', maxWidth: '320px', margin: '0 auto 20px' }}>Begin compiling your inventory by adding your first product SKU.</p>
        <button style={{ background: '#2563EB', border: 'none', color: '#FFFFFF', padding: '10px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>+ Add Item</button>
      </div>
    </div>
  );
}
