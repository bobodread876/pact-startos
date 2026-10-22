import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'pactd',
  title: 'Pact',
  license: 'Apache-2.0',
  packageRepo: 'https://github.com/Start9-Community/pact-startos',
  upstreamRepo: 'https://github.com/bobodread876/pact',
  marketingUrl: 'https://bobodread876.github.io/pact-site/',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    pactd: {
      // Upstream pactd 0.20.1's image (built by the pactd-v0.20.1 release) has
      // the eMudhra CA fix baked in (CA store refresh + use-openssl-ca), so the
      // temporary wrapper Dockerfile from Start9-Community PR#6 comes out per
      // their issue #7.
      source: { dockerTag: 'ghcr.io/bobodread876/pactd:0.20.1' },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
