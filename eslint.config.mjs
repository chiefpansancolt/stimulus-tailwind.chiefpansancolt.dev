import coreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  ...coreWebVitals,
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'public/',
      '*.config.js',
      '*.config.mjs',
    ],
  },
]

export default config
