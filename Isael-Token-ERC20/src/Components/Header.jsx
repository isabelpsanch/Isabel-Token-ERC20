import { ConnectKitButton } from 'connectkit'
export default function Header() {
  return (
    <header className="border-b shadow py-2 px-3 flex justify-between items-center">
      {/* Logo para version mobile */}
      <img src="/blockmaker-small-logo.png" alt="blockmaker-mobile-logo" className="sm:hidden" width={47} />
      {/* Logo para version desktop */}
      <img src="/blockmaker-full-logo.png" alt="blockmaker-desktop-logo" className="hidden sm:block" width={300} />
      <ConnectKitButton showBalance />
    </header>
  )
}