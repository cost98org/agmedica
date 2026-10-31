const specialists = [
  { name: 'Dr. G. De Lumè', specialization: 'Osteopata D.O.', phone: '320 462 4437', href: 'tel:+393204624437' },
  { name: 'Dr. A. Balestra', specialization: 'Nutrizionista', phone: '331 788 2547', href: 'tel:+393317882547' },
  { name: 'Dr. T. Richelmi', specialization: 'Medico Ozonoterapia', phone: '342 623 1669', href: 'tel:+393426231669' },
  { name: 'Dr. A. Romagnoli', specialization: 'Psicologo e Psicoterapeuta', phone: '339 332 1147', href: 'tel:+393393321147' },
]

export default function SpecialistContacts() {
  return (
    <section className="specialist-contacts" id="specialisti" aria-label="Contatti degli specialisti">
      <div className="specialist-contacts-grid">
        {specialists.map(({ name, specialization, phone, href }) => (
          <div className="info-row specialist-info-row" key={name}>
            <div className="info-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.47 2 2 0 0 1 3.62 1.27h3a2 2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l1.02-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="info-content">
              <strong>{name} — {specialization}</strong>
              <span className="specialist-details-line">
                <a href={href} aria-label={`Chiama ${name} al ${phone}`}>{phone}</a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
