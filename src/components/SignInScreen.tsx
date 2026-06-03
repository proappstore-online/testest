import { SignInButton } from '@proappstore/sdk/ui'
import { app } from '../lib/app'

/**
 * Unauthenticated landing / sign-in screen.
 *
 * GitHub  → <SignInButton app={app} label="..." />  (only valid props are app + label)
 * Google  → custom button calling app.auth.signIn('google') directly
 *           (do NOT pass provider to <SignInButton> — that fails tsc)
 */
export default function SignInScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-4">
      {/* Logo / brand placeholder */}
      <div className="mb-8 flex flex-col items-center gap-3">
        {/* Replace with <img src="/logo.svg" alt="CarelyBay" /> once asset is ready */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
          style={{ backgroundColor: 'var(--color-primary)' }}
          aria-hidden="true"
        >
          CB
        </div>
        <h1 className="text-3xl font-bold text-on-surface tracking-tight">CarelyBay</h1>
        <p className="text-center text-gray-500 max-w-sm">
          Trusted care for your family and pets — find verified nannies, childcare providers, and pet sitters near you.
        </p>
      </div>

      {/* Sign-in card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-on-surface text-center mb-2">Get started</h2>

        {/* GitHub — uses <SignInButton>; props: app + optional label ONLY */}
        <SignInButton app={app} label="Sign in with GitHub" />

        {/* Divider */}
        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        {/* Google — custom button; never uses <SignInButton provider=...> (fails tsc) */}
        <button
          onClick={() => app.auth.signIn('google')}
          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {/* Google "G" icon — inline SVG, no external dependency */}
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
              fill="#4285F4"
            />
            <path
              d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
              fill="#34A853"
            />
            <path
              d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z"
              fill="#FBBC05"
            />
            <path
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58Z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>
      </div>

      <p className="mt-6 text-xs text-gray-400 text-center">
        By signing in you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  )
}
