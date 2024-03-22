import { Link } from "../components/Link";
import { SiteHeader } from "../components/SiteHeader";
import { H1, P, Center } from "../components/typography";

function Error404Page() {
  return (
    <>
      <SiteHeader />
      <Center>
        <H1>Oops, looks like you're lost in the woods</H1>
      </Center>
      <Center>
        <P>
          Why don't you follow the path back <Link to="/">home</Link>?
        </P>
      </Center>
    </>
  );
}

export default Error404Page;
