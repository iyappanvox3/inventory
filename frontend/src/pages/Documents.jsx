export default function Documents() {
  return (
    <div style={{ padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0F172A', marginBottom: '8px' }}>Documents & Invoices</h2>
      <p style={{ color: '#475569', fontSize: '14px', marginBottom: '24px' }}>Access your files, signed shipping slips, and history receipts.</p>
      
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '40px', textAlign: 'center', color: '#64748B' }}>
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: '0 auto 16px', color: '#94A3B8' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0F172A', marginBottom: '4px' }}>No documents uploaded</h3>
        <p style={{ fontSize: '13px', color: '#94A3B8', maxWidth: '320px', margin: '0 auto 20px' }}>Upload bills, custom checklists, or packing lists to link them with orders.</p>
        <button style={{ background: '#2563EB', border: 'none', color: '#FFFFFF', padding: '10px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>+ Upload Document</button>
      </div>
    </div>
  );
}
