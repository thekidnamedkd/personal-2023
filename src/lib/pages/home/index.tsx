import { VStack } from "@chakra-ui/react";

import LinkOut from "lib/components/LinkOut";
import ListCluster from "lib/components/ListCluster";

const Home = () => {
  return (
    <VStack flexDirection="column" align="start" spacing="5">
      <ListCluster title="Now">
        <LinkOut
          href="https://www.onvessel.world/"
          title="Vessel"
          description="A web3 Brand Strategy Platform"
          tools="Next.js, SWR, Prisma, Posgres (Supabase), Tailwind, GraphQL, Zod, React Hook Form"
        />
      </ListCluster>
      <ListCluster title="Most Recent">
        <LinkOut
          href="https://launch.seedclub.xyz/"
          title="Seed Club: Launch"
          description="DAO launch platform based on Nouns Builder, Public Assembly tooling"
          tools="Next.js, Docker, React Query, SIWE, Apollo, GQL"
        />
        <LinkOut
          href="https://members.seedclub.xyz/"
          title="Seed Club: Member Network"
          description="Community media platform for a post-Discord world"
          tools="Next.js, SWR, NextAuth, Chakra, Postgres"
        />
        <LinkOut
          href="https://clubgoods.xyz/"
          title="Seed Club: Club Goods"
          description="DAO launch platform based on Nouns Builder, Public Assembly tooling"
          tools="Next.js, Lit Protocol, iron-session, web3 Shopify API"
        />
        <LinkOut
          href="https://www.joy.world/"
          title="JOYWORLD"
          description="Mixed reality art studio hub using web3 as part of its creative stack"
          tools="React app overhaul, 3D modeling, XR tooling, AWS (S3, Lambda, Event Bridge)"
        />
      </ListCluster>
      <ListCluster title="Lately">
        <LinkOut
          href="https://www.public---assembly.com/about"
          title="Public Assembly DAO Contributor"
        />
        <LinkOut
          href="https://cryptosociety.notion.site/Crypto-Culture-Society-6a8dd5ee05b04684998b5206ae842195"
          title="Developer DAO Member"
        />
        <LinkOut
          href="https://courses.consensys.net/courses/blockchain-developer-bootcamp-registration-2021"
          title="ConsenSys Ethereum Certified"
        />
        <LinkOut
          href="https://elektra.camp/"
          title="Songcamp: Elektra Developer"
        />
        <LinkOut
          href="https://www.kernel.community/"
          title="KERNEL KB3 Fellow"
        />
      </ListCluster>
      <ListCluster title="Less Lately">
        <LinkOut
          href="https://www.kampgrizzly.com/"
          title="Kamp Grizzly Production Assistant"
        />
        <LinkOut
          href="https://www.redbull.com/us-en/events/red-bull-music-presents-portland"
          title="Red Bull Music Production Lead"
        />
      </ListCluster>

      <ListCluster title="Awhile Ago">
        <LinkOut
          href="https://www.tellallyourfriendspr.com/allartists"
          title="National Publicist & Artist Manager"
        />
      </ListCluster>
    </VStack>
  );
};

export default Home;
