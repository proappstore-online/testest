import { ProfileMenu } from '@proappstore/sdk/ui'
import { app } from '../lib/app'
import Dashboard from './Dashboard'

interface AppShellProps {
  user: { id: string; login: string; avatarUrl: string | null; dateOfBirth: string | null }
}

/**
 * Authenticated app shell — header + main content area.
 * Displays user.login (NOT user.name / user.email — those fields don't exist on the SDK User).
 * <ProfileMenu> provides built-in sign-out.
 */
export default function AppShell({ user }: AppShellProps) {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: 'var(--color-primary)' }}
              aria-hidden="true"
            >
              CB
            </div>
            <span className="font-semibold text-on-surface">CarelyBay</span>
          </div>

          {/* Right side — login name + profile menu */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden sm:inline">
              {user.login}
            </span>
            <ProfileMenu app={app} />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Dashboard user={user} />
      </main>
    </div>
  )
}
