import { useProAuth } from '@proappstore/sdk'
import { app } from './lib/app'
import SignInScreen from './components/SignInScreen'
import AppShell from './components/AppShell'

/**
 * Root component — gates the app with useProAuth.
 * loading  → spinner
 * !user    → <SignInScreen />
 * user     → <AppShell />
 */
export default function App() {
  const { user, loading } = useProAuth(app)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div
          className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin"
          role="status"
          aria-label="Loading"
        />
      </div>
    )
  }

  if (!user) {
    return <SignInScreen />
  }

  return <AppShell user={user} />
}
