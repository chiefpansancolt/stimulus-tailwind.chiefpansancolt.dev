import { ImageResponse } from 'next/og'

export const alt = 'StimulusJS Tailwindcss Docs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const Image = () =>
  new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 50% 35%, rgba(56,189,248,0.15) 0%, transparent 60%)',
          }}
        />
        <div
          style={{
            color: 'white',
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: '-1px',
            marginBottom: 20,
          }}
        >
          StimulusJS Tailwindcss
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 32,
            fontWeight: 400,
          }}
        >
          Getting started in a frameworkless project
        </div>
      </div>
    ),
    { ...size }
  )

export default Image
