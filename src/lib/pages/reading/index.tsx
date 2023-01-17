import LinkOut from "lib/components/LinkOut";
import ListCluster from "lib/components/ListCluster";

const Reading = () => {
  return (
    <ListCluster title="Reading List">
      <LinkOut
        href="https://www.goodreads.com/book/show/11320.The_Captain_s_Verses"
        title="Pablo Neruda - The Captain's Verses"
      />
      <LinkOut
        href="https://www.goodreads.com/book/show/1065453.The_Exploit"
        title="Alexander Galloway - The Exploit: A Theory of Networks"
      />
      <LinkOut
        href="https://www.furtherfield.org/radical-friends-book/"
        title="Ruth Catlow & Penny Rafferty - Radical Friends: Decentralised Autonomous Organisations and the Arts"
      />
      <LinkOut
        href="https://www.goodreads.com/book/show/34811965-poes-a-reunida"
        title="William Carlos Williams - Poesía Reunida"
      />
      <LinkOut
        href="https://www.goodreads.com/en/book/show/11347563-cruel-optimism"
        title="Lauren Berlant - Cruel Optimism"
      />
    </ListCluster>
  );
};

export default Reading;
