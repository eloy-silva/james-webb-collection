import React from "react";
import { Container, Scroll, SubTitle, Title } from "./style";
import { useViewportScroll, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";


function Header() {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0.188, 0.198], ["0%", "-100%"]);

  return (
    <Container style={{ y }}>
      <AnimatePresence>
      <Title
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        JAMES WEBB
        <SubTitle
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1}}
          transition={{
            duration: 2.0,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        
        >
          collection
        </SubTitle>
      </Title>
        
      <Scroll
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, rotate: 360, x: [0, 80, 0] }}
        transition={{
          duration: 2.0,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01]
        }}  
      >
        scroll down
      </Scroll>
      </AnimatePresence>
      
    </Container>
  );
}

export default Header;
