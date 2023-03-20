import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { filecoin, filecoinHyperspace } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

import Dashboard from "./pages/Dashboard";
import Particles from "./components/Particles";

function App() {
  const { chains, provider } = configureChains(
    [filecoinHyperspace, filecoin],
    [
      alchemyProvider({ apiKey: "O5NYvtwLMNG0LjAXPQEk0YJT2l3UxTAY" }),
      publicProvider(),
    ]
  );
  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="register" element={<Register />} />
              <Route path="/open-existing-data-dao" element={<Dashboard />} />
            </Routes>
          </Router>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
