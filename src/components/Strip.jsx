export default function Strip() {
  return (
    <div className="strip">
      <div className="strip-inner">
        <a href="https://maps.google.com/?q=Via+Giacomo+Leopardi+3,+Opera+MI+20090" target="_blank" rel="noopener noreferrer" className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Via Giacomo Leopardi 3, Opera (MI) 20090
        </a>
        <span className="strip-right">
          <span className="strip-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Lun–Ven 9:00–19:00 &middot; Sab 9:00–13:00
          </span>
          <a href="mailto:info@agmedica.it" className="strip-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            info@agmedica.it
          </a>
        </span>
      </div>
    </div>
  )
}
