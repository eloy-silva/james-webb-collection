import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  width: 100%;
  height: 30%;
  background-color: #bf7e65;
  position: fixed;
  top: 0;
  z-index: 9999;
`;
export const Title = styled(motion.div)`
  margin: 0 auto;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  font-size: 3rem;
  padding: 0 32px;
  height: 100%;
  color: white;
  font-weight:bold;
`;

export const SubTitle = styled(motion.p)`

  margin: 0 auto;
  align-items: center;
  text-align: center;
  font-size: 3rem;
  font-weight:lighter;
  padding: 0 32px;
  height: 100%;
  color: white;
`;




export const Scroll = styled(motion.h3)`
  margin-left: 40px;
  align-items: center;
  text-align: center;
  position: fixed;
  font-size: bold;
  color: white;
  font-size: 15px;

  cursor: pointer;
  border: 1px solid white;
  height: 60px;
  width: 60px;
  display: flex;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #bf7e65;
  }
`;

