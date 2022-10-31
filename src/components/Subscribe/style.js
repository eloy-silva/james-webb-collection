import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div``;

export const NewsLetterIcon = styled(motion.div)`
    
  font-size: 15px;
  color: white;
  align-items: baseline;
  text-align: center;
  margin-bottom: 100px;
  right: 15px;
  padding: 10px;
  border-radius: 50%;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: #bf7e65;
  }
`;

export const ModalContainer = styled(motion.div)`
  color: white;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
`;

export const Modal = styled(motion.div)`
  border: 1px solid white;
  background-color: #bf7e65;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: 480px;
  border-radius: 1px;

  padding: 0px 10px 25px 10px;

  text-align: center;

  h3 {
    font-size: 30px;
  }
`;


export const FieldContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FieldEmail = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  border-radius: 4px;
  padding: 10px 5px;
`;

export const Input = styled(motion.input)`
  margin-left: 5px;
  font-size: 18px;
  width: 100px;
  outline: none;
  border: 1px solid white;
`;

export const Button = styled(motion.button)`
  background: none;
  border: 1px solid white;
  margin-left: 70%;
  padding: 10px;
  font-size: 20px;
  text-align: right;
  font-size: bold;
  font-size: 20px;
`;


export const CloseButton =  styled(motion.p)`
  color:  black;
  padding: 10px;
  width: 100%;
  display: flex;
  cursor: pointer;
`;