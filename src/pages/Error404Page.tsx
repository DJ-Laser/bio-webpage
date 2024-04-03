import { SiteHeader } from "../components/SiteHeader";
import { H1, H3, Center, Separation, Link } from "../components/typography";

function Error404Page() {
  return (
    <>
      <SiteHeader />
      <Center>
        <H1>Error 404, that page was lost in the woods</H1>
      </Center>
      <Separation />
      <Center>
        <H3>
          Why don't you follow the path back <Link to="/">home</Link>?
        </H3>
      </Center>
    </>
  );
}

export default Error404Page;
