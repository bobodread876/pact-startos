import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.20.2:0',
  releaseNotes: {
    en_US:
      'Upstream pactd 0.20.2: the P0 security-audit stack (consent verdicts, UI safe-DOM, HTTP origin/host guards, fulfill-before-consume paywall) + Node 22.23.4 + the eMudhra distrust baked into the image.',
    es_ES:
      'pactd 0.20.2: la pila de auditoría P0 (veredictos de consentimiento, UI safe-DOM, guardas HTTP de origin/host, paywall fulfill-before-consume) + Node 22.23.4 + la desconfianza eMudhra integrada en la imagen.',
    de_DE:
      'pactd 0.20.2: der P0-Security-Audit-Stack (Consent-Verdicts, UI safe-DOM, HTTP-Origin/Host-Guards, Fulfill-before-Consume-Paywall) + Node 22.23.4 + die eMudhra-Misstrauens-Pflege im Image.',
    pl_PL:
      'pactd 0.20.2: stos audytu P0 (werdykty zgód, UI safe-DOM, guardy origin/host HTTP, paywall fulfill-before-consume) + Node 22.23.4 + nieufność eMudhra wbudowana w obraz.',
    fr_FR:
      'pactd 0.20.2 : la pile d’audit P0 (verdicts de consentement, UI safe-DOM, gardes origin/host HTTP, paywall fulfill-before-consume) + Node 22.23.4 + la défiance eMudhra intégrée à l’image',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
