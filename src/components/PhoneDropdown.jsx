const professionals = [
  { name: 'De Lumè', phone: '320 462 4437', href: 'tel:+393204624437' },
  { name: 'Balestra', phone: '331 788 2547', href: 'tel:+393317882547' },
  { name: 'Richelmi', phone: '342 623 1669', href: 'tel:+393426231669' },
  { name: 'Romagnoli', phone: '339 332 1147', href: 'tel:+393393321147' },
]

export default function PhoneDropdown() {
  return (
    <details className="phone-dropdown" style={{ position: 'relative', width: '100%', maxWidth: 360 }}>
      <summary style={{ cursor: 'pointer', color: 'inherit', fontWeight: 600, padding: '0.35rem 0', listStyle: 'auto' }}>
        Scegli il professionista
      </summary>
      <div style={{ display: 'grid', gap: '0.4rem', padding: '0.7rem', marginTop: '0.3rem', border: '1px solid #dce5e7', borderRadius: 12, background: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,.08)' }}>
        {professionals.map(({ name, phone, href }) => (
          <a key={name} href={href} style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'center', padding: '0.55rem', borderRadius: 8, color: '#123751', textDecoration: 'none' }}>
            <strong>{name}</strong><span>☎ {phone}</span>
          </a>
        ))}
      </div>
    </details>
  )
}
