import SiteHeader from "./components/SiteHeader"
import { ThemeProvider } from "./components/theme/ThemeProvider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark">
      <SiteHeader />
        
    </ThemeProvider>
  )
}

export default App
