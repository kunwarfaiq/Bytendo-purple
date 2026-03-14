# Bytendo Clone — Build Notes

## Brand Override
All instances of "Nubien" have been replaced with "Bytendo" including:
- [x] Page `<title>`
- [x] All `<meta>` tags
- [x] Navigation logo
- [x] Hero headline and subtext
- [x] Footer logo and tagline
- [x] All body copy mentions
- [x] Image `alt` text
- [x] aria-label attributes

## Fonts Extracted
| Font Family | Weights | Source |
|-------------|---------|--------|
| DM Sans     | 400,500,600,700 | Google Fonts |
| Inter       | 400,500,600 | Google Fonts |

## Color Palette Extracted
Mapped CSS Variables from source to Bytendo tokens.
- --color-bg-primary: #000000
- --color-accent-1: rgb(79, 26, 214)

## Animations Implemented
| Animation | Method | Notes |
|-----------|--------|-------|
| Hero entrance | CSS @keyframes + animation-delay | Staggered fade-up |
| Scroll reveals | IntersectionObserver + CSS transitions | All sections |
| Custom cursor | JS requestAnimationFrame + lerp | Dot + ring |
| Marquee ticker | CSS @keyframes marquee | Infinite loop |
| Floating hero image | CSS @keyframes float | Gentle up-down |
| Nav glassmorphism | JS scroll listener + CSS .scrolled | Backdrop blur |

## Assets
Saved inline or used via high quality CDNs.

## Framer Features → Web Approximations
Successfully mapped Framer Motion to standard IntersectionObserver + CSS transitions.
