import { Body } from "@/components/WebsiteLayout";
import {
  P,
  H1,
  H2,
  H3,
  Center,
  Separation,
  UrlLink,
} from "../components/typography";

function Home() {
  return (
    <Body>
      <Center>
        <H1>Offshore wind: A sustainable approach to green power</H1>
      </Center>
      <Separation />
      <H2>The need for green power</H2>
      <P>
        Every year, the average human uses over 23 barrels of petroleum products
        like gasoline and propane, and even more coal and natural gas. Across
        all 8 billion people on earth, we produce 36.8 billion metric tons of
        carbon dioxide every year. One of the main uses for these fossil fuels
        is generating electricity. If we want to slow climate change, we will
        need to stop burinig these fossil fuels and find cleaner solutions, like
        solar pannels, hydropower, and wind turbines.
      </P>
      <H2>The problems with wind</H2>
      <P>
        Wind energy is a prommising source of green energy, however it has some
        major drawbacks, for example, land footprint. An individual wind turbine
        is relatively small, however for the most efficient production, wind
        turbines are often placed in groups called wind farms, where they must
        be spaced out over a long distace. Another concern is from homeowners,
        who often argue against installing wind turbines in residential areas
        due to high noise and unattractive looks. Wind turbines must also be
        placed in unobstructed areas like open land or mountain ranges as hills
        and other obstructions can block the flow of air to the turbine.
      </P>
      <H2>Fixing wind turbines: Offshore wind</H2>
      <P>
        Wind turbines on land have many disadvantages, however wind turbines can
        also be placed out as sea, known as offshore wind turbines. While these
        can be harder to construct than regular wind turbines, they also avoid
        taking up large amounts of land and can avoid obstructions. Out target
        regoain for applying this technology is Hawaii, due to their high
        electricity prices and reliance on fossil fuels, as well as being an
        island, making it easy to connect offshore wind.
      </P>
      <H2>Our Plan</H2>
      <P>
        We plan to work with wind turbine company Vestas who has experiance
        producing offshore wind turbines. We will work with them to install an
        offshorw wind farm consisiting of 50 turbines, expected to produce 180
        megawats, or enough to power 100 thousand homes. We expect this to
        reduce carbon emmissions by 10% and lower electricity prices for
        Hawiians, who mostly have to import electricity from the mainland.
      </P>
      <H2>Continuing Support</H2>
      <P>
        After we work to install the turbines, we will also continue monitoring
        energy use and turbine efficiency. Our hope is that gathering this data
        will help us be informed about furure renewable energy projects in
        Hawaii, which is aiming to be 100% renewable by 2045. We will also work
        with the local community to educate the people about renewable energy
        and energy waste. We hope to reduce overall energy consumption by
        wasting less to things like unused chargers lights that get left on when
        no one is home.
      </P>
      <H3>Citations</H3>
      <P>
        <UrlLink to="https://www.visualcapitalist.com/lifetime-consumption-fossil-fuels-visualized/" />
        <br />
        <UrlLink to="https://www.eia.gov/energyexplained/wind/wind-energy-and-the-environment.php" />
        <br />
        <UrlLink to="https://www.eia.gov/state/?sid=HI" />
        <br />
        <UrlLink to="https://us.vestas.com/en-us" />
        <br />
      </P>
    </Body>
  );
}

export default Home;
