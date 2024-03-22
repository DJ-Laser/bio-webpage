import { Link } from "../components/Link";
import { SiteHeader } from "../components/SiteHeader";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { H1, P, Center } from "../components/typography";

function Error404Page() {
  return (
    <ThemeProvider defaultTheme="dark">
      <SiteHeader />
      <Center>
        <H1>Oops, looks like you're lost in the woods</H1>
      </Center>
      <Center>
        <P>
          Why don't you follow the path back <Link to="/">home</Link>?
        </P>
      </Center>
    </ThemeProvider>
  );
}

export default Error404Page;
