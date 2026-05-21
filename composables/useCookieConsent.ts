interface CookieConsent {
  essential: boolean
  analytics: boolean
}

const STORAGE_KEY = 'cookie-consent'
const EXPIRY_DAYS = 180

export const useCookieConsent = () => {
  const consent = useState<CookieConsent | null>('cookie-consent', () => null)
  const showBanner = useState('cookie-banner-visible', () => false)

  const loadConsent = () => {
    if (import.meta.server) return
    const raw = document.cookie.split('; ').find(c => c.startsWith(`${STORAGE_KEY}=`))
    if (raw) {
      consent.value = JSON.parse(decodeURIComponent(raw.split('=')[1]))
    } else {
      showBanner.value = true
    }
  }

  const saveConsent = (preferences: CookieConsent) => {
    consent.value = preferences
    showBanner.value = false
    const expires = new Date(Date.now() + EXPIRY_DAYS * 864e5).toUTCString()
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(JSON.stringify(preferences))}; expires=${expires}; path=/; SameSite=Lax`
    applyConsent(preferences)
  }

  const acceptAll = () => saveConsent({ essential: true, analytics: true })
  const rejectOptional = () => saveConsent({ essential: true, analytics: false })

  const applyConsent = (prefs: CookieConsent) => {
    if (prefs.analytics) {
      loadGoogleAnalytics()
    } else {
      removeGoogleAnalytics()
    }
  }

  const loadGoogleAnalytics = () => {
    if (document.getElementById('ga-script')) return
    const script = document.createElement('script')
    script.id = 'ga-script'
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BMPSB28JV0'
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) { window.dataLayer.push(args) }
    gtag('js', new Date())
    gtag('config', 'G-BMPSB28JV0')
  }

  const removeGoogleAnalytics = () => {
    const script = document.getElementById('ga-script')
    if (script) script.remove()
    // Opt-out cookie de GA
    window[`ga-disable-G-BMPSB28JV0`] = true
  }

  const init = () => {
    loadConsent()
    if (consent.value) {
      applyConsent(consent.value)
    }
  }

  return { consent, showBanner, saveConsent, acceptAll, rejectOptional, init }
}

declare global {
  interface Window {
    dataLayer: any[]
    [key: string]: any
  }
}
