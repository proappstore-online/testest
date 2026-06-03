interface DashboardProps {
  user: { id: string; login: string; avatarUrl: string | null; dateOfBirth: string | null }
}

/**
 * Placeholder dashboard — content is out of scope for this ticket.
 * Replaced by real feature screens in subsequent tickets.
 */
export default function Dashboard({ user }: DashboardProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center gap-4">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
        style={{ backgroundColor: 'var(--color-primary)' }}
        aria-hidden="true"
      >
        {user.login.slice(0, 2).toUpperCase()}
      </div>
      <h1 className="text-2xl font-bold text-on-surface">
        Welcome to CarelyBay, {user.login}!
      </h1>
      <p className="text-gray-500 text-center max-w-md">
        You&apos;re signed in. The app is taking shape — more features are coming in the next tickets.
      </p>
      <div
        className="mt-4 px-6 py-3 rounded-xl text-white text-sm font-medium"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        Pre-launch — stay tuned 🚀
      </div>
    </div>
  )
}
