import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.main`
  .first {
    background: black;
    overflow: hidden;
    align-items: center;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      margin-top: auto;
      background: black;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        zoom: 1.4;
        width: 50%;
        height: 50%;
        background: url("./assets/anel-sul.jpg") no-repeat center;
      }
      .right-side {
        background: black;
        width: 50%;
        height: 100%;

        .right-image {
          zoom: 1.4;
          background: url("./assets/carina-nircan.jpg") center no-repeat;
          width: 100%;
          height: 100%;
        }
      }
    }
    .b {
      zoom: 1.4;
      width: 100%;
      height: 100%;
      background: url("./assets/carina-nebula.png") center no-repeat;
    }
    .c {
      zoom: 2.5;
      width: 100%;
      height: 100%;
      background: url("./assets/james-webb.png") no-repeat center;
    }
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
