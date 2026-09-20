import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  webpack(config, { isServer, defaultLoaders }) {
    // Next.js 16.2+ decides whether a page is a Server Component from the SWC
    // loader's `bundleLayer` option. The Markdoc rule reuses the layer-less
    // default loader, so `.md` pages get treated as Client Components and fail
    // on their `metadata` export. Pages only ever render in the RSC layer.
    if (isServer) {
      for (const rule of config.module.rules) {
        if (!Array.isArray(rule.use) || !rule.test?.test?.('page.md')) continue
        rule.use = rule.use.map((loader) =>
          loader === defaultLoaders.babel
            ? {
                ...loader,
                options: { ...loader.options, bundleLayer: 'rsc' },
              }
            : loader,
        )
      }
    }

    return config
  },
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)
