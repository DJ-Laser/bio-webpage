import { Body } from "@/components/WebsiteLayout";
import { H1, H3, Center, Separation, Link } from "../components/typography";

function Error404Page() {
  return (
    <Body>
      <Center>
        <H1>Error 404, that page was lost in the woods</H1>
      </Center>
      <Separation />
      <Center>
        <H3>
          Why don't you follow the path back <Link to="/">home</Link>?
        </H3>
      </Center>
    </Body>
  );
}

export default Error404Page;
