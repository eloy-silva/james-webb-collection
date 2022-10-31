import React from "react";
import Subscribe from "../Subscribe";
import { Container, Micro, Quote } from "./styles";

function Footer() {
  return (
    <Container>
      <Quote>
        JWST
        <p>
          We wonder. Its our nature. <br />
          How did we get here? Are we alone in the universe? <br />
          How does the universe work?
        </p>
        <p>
          The James Webb Space Telescope is an ambitious scientific endeavor to
          answer these questions. Webb builds on the legacy of previous
          space-based telescopes to push the boundaries of human knowledge even
          further, to the formation of the first galaxies and the horizons of
          other worlds.
        </p>
      </Quote>

      <Micro>
        <div>
          <p>Explore the universe with Webb.</p>
        </div>
      </Micro>
      <Subscribe />
    </Container>
  );
}

export default Footer;
