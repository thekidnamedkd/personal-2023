import LinkOut from "lib/components/LinkOut";
import ListCluster from "lib/components/ListCluster";

const Snapshot = () => {
  return (
    <>
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
      <ListCluster title="Podcasts">
        <LinkOut
          href="https://open.spotify.com/episode/2DymCQvMXOrPlv9k2x92kf?si=51bf0a75c6a841c1"
          title="UFO - Create What's Missing with Public Assembly - losingmyego, 0xTranqui, Salief Lewis"
        />
        <LinkOut
          href="https://open.spotify.com/episode/0H8milCjFYH1hngOryk1bA?si=2d7728af5a784ed2"
          title="The Joy of Why - Is There Math Beyond the Equal Sign?"
        />
        <LinkOut
          href="https://open.spotify.com/episode/6KqPEjWF51IU2Px4xI0Izr?si=8b49a7af75f249e8"
          title="COMPLEXITY - Alison Gopnik on Child Development, Elderhood, Caregiving, and A.I."
        />
        <LinkOut
          href="https://open.spotify.com/episode/4YqDomwss013fXG34NB62A?si=O5xtbTrQSPOnfy8eU2FhEg"
          title="On The Media - It's a Machine's World"
        />
        <LinkOut
          href="https://open.spotify.com/episode/0L7dIdTSjyVfTIa2uJiquG?si=851ad98add67409a"
          title="NO SKIPS with Jinx and Shea - Lil' Kim 'Hard Core' | Vol. 1 Ep. 3"
        />
      </ListCluster>
      <ListCluster title="Around">
        <LinkOut
          href="https://youtu.be/NDC7tZv9E6M"
          title="Was ist die c-base?"
        />
        <LinkOut
          href="https://folklore.mirror.xyz/Urj78CpaE8_flb0hUj_1AOGfSevCL9ysqob3pa_JHIM"
          title="Folklore (Rafa) - The Sequence"
        />
        <LinkOut
          href="https://youtu.be/oiDKH4tJmmI"
          title="Okay Kaya - Spinal Tap (Official Video)"
        />
        <LinkOut
          href="https://so-far.xyz/contributors/yin-aiwen"
          title="ON PLATFORM DESIGN, PART I-V"
        />
        <LinkOut
          href="https://github.com/public-assembly"
          title="Public Assembly Github Repo"
        />
      </ListCluster>
    </>
  );
};

export default Snapshot;
