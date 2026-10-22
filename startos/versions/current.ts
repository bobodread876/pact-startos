import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.20.1:0',
  releaseNotes: {
    en_US:
      'Upstream pactd 0.20.1: consent, privacy and daemon hardening; the image now ships Node 22.23.4 (October 2026 security release) and distrusts the compromised eMudhra certificate authority, so the temporary CA-store layer is removed.',
    es_ES:
      'pactd 0.20.1: endurecimiento de consentimiento, privacidad y demonio; la imagen incluye Node 22.23.4 (release de seguridad de octubre 2026) y deja de confiar en la autoridad de certificación comprometida eMudhra, por lo que se elimina la capa temporal de CA.',
    de_DE:
      'pactd 0.20.1: Härtung von Consent, Privatsphäre und Daemon; das Image enthält Node 22.23.4 (Sicherheitsrelease Oktober 2026) und vertraut der kompromittierten Zertifizierungsstelle eMudhra nicht mehr — die temporäre CA-Speicher-Schicht ist entfernt.',
    pl_PL:
      'pactd 0.20.1: utwardzenie zgód, prywatności i demona; obraz zawiera Node 22.23.4 (bezpieczne wydanie z października 2026) i przestaje ufać skompromitowanemu urzędowi eMudhra — tymczasowa warstwa CA została usunięta.',
    fr_FR:
      'pactd 0.20.1 : durcissement consentement, confidentialité et daemon ; l’image embarque Node 22.23.4 (release de sécurité d’octobre 2026) et ne fait plus confiance à l’autorité compromise eMudhra — la couche CA temporaire est supprimée.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
