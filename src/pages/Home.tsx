import { SiteHeader, CenteredHeader } from "../components/SiteHeader";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { P } from "../components/typography";

function Home() {
  return (
    <ThemeProvider defaultTheme="dark">
      <SiteHeader />
      <P></P>
    </ThemeProvider>
  );
}

export default Home;
