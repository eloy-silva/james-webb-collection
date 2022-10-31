import React, { useState } from "react";
import {
  NewsLetterIcon,
  ModalContainer,
  Modal,
  FieldEmail,
  Container,
  Button,
  Input,
  CloseButton,
} from "./style";
import { AnimatePresence } from "framer-motion";


function Subscribe() {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <NewsLetterIcon onClick={() => handleModal()}>
        <h3>Subscribe</h3>
      </NewsLetterIcon>
      <AnimatePresence>
        {showModal && (
          <ModalContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
          >
            <Modal
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              exit={{ scale: [1, 1.2, 0], transition: { duration: 0.5 } }}
              transition={{
                duration: 2.0,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              
            >
              <CloseButton onClick={() => handleModal()}  whileTap={{ scale: 1.1 }}>
               close
              </CloseButton>
              <h3>Subscribe for More</h3>
        
                <FieldEmail whileTap={{ scale: 1.1 }}>
                  <p>EMAIL</p>
                  <Input
                    text="text"
                    placeholder="Email here"
                    value={input}
                    name="email"
                    onChange={handleChange}
                    animate={input.length ? { width: 280 } : { width: 100 }}
                
                   
                  />
                </FieldEmail>
             
              <Button whileTap={{ scale: 1.5 }}  animate={{ rotate: 720, opacity: 1 }} exit={{ opacity: 0 }}  >
                submit
              </Button>
            </Modal>
          </ModalContainer>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default Subscribe;
