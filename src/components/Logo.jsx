import { useId } from 'react'

const ICON_SIZES = { sm: 32, md: 40, lg: 48 }

/**
 * Ícone da marca MeuRoteiro — pin, rota e destino.
 * Flat premium, otimizado para header e favicon.
 */
export function LogoIcon({ size = 40, className = '' }) {
  const uid = useId().replace(/:/g, '')

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="8" y1="4" x2="34" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="0.55" stopColor="#0D9488" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>

      {/* Container */}
      <rect width="40" height="40" rx="11" fill={`url(#${uid}-bg)`} />
      <rect x="1" y="1" width="38" height="38" rx="10" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1" />

      {/* Bússola sutil — cruz fina */}
      <path d="M20 9.5V12M20 28V30.5M9.5 20H12M28 20H30.5" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" />
      <path d="M20 10.5L20.6 12.2H19.4L20 10.5Z" fill="#FFFFFF" fillOpacity="0.35" />

      {/* Grade de mapa discreta */}
      <path d="M11 15H29M11 22H29M11 29H29" stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="0.75" />
      <path d="M15 13V31M25 13V31" stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="0.75" />

      {/* Linha de roteiro */}
      <path
        d="M9 28.5C13.5 23.5 16.5 24.5 20 21.5C23.5 18.5 27 19 31.5 13.5"
        stroke="#FFFFFF"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Origem (sunset) e parada */}
      <circle cx="9" cy="28.5" r="2.4" fill="#F59E0B" />
      <circle cx="31.5" cy="13.5" r="2" fill="#FFFFFF" fillOpacity="0.95" />

      {/* Pin central */}
      <path
        d="M20 13.5c-2.2 0-4 1.8-4 4 0 2.95 4 7.5 4 7.5s4-4.55 4-7.5c0-2.2-1.8-4-4-4Z"
        fill="#FFFFFF"
      />
      <circle cx="20" cy="17.5" r="1.75" fill="#14B8A6" />
      <circle cx="20" cy="17.5" r="0.7" fill="#0F766E" />
    </svg>
  )
}

export function LogoWordmark({ className = '' }) {
  return (
    <span className={`logo__name ${className}`.trim()}>
      <span className="logo__prefix">Meu</span>
      <span className="logo__accent">Roteiro</span>
    </span>
  )
}

/**
 * @param {'full' | 'icon' | 'wordmark'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function Logo({
  variant = 'full',
  size = 'md',
  inverted = false,
  onClick,
  className = '',
  'aria-label': ariaLabel = 'MeuRoteiro — ir para o início',
}) {
  const iconSize = ICON_SIZES[size] ?? ICON_SIZES.md
  const sizeClass = `logo--${size}`
  const invertedClass = inverted ? 'logo--inverted' : ''

  const content = (
    <>
      {(variant === 'full' || variant === 'icon') && (
        <span className="logo__mark">
          <LogoIcon size={iconSize} />
        </span>
      )}
      {(variant === 'full' || variant === 'wordmark') && (
        <LogoWordmark />
      )}
    </>
  )

  const classes = ['logo', sizeClass, invertedClass, className].filter(Boolean).join(' ')

  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </button>
    )
  }

  return (
    <div className={classes} role="img" aria-label={ariaLabel}>
      {content}
    </div>
  )
}
