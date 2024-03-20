import { ConnectKitProvider } from 'connectkit'
import { WagmiConfig } from './Config/wagmi'
import { AppLayout } from './Components/ui/layouts'
import { config } from './config'
import { Home } from './pages'


function App() {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider mode="light">
        <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App
