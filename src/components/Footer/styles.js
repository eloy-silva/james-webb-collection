import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;

`;
export const Quote = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  margin-left: 10%;
  margin-right: 10%;
  align-items: center;
  text-align: center;
  font-size: bold;
  font-size: 3rem;
  position: sticky;

  p {
    margin: 15px;
    font-size: 2rem;
    align-items: center;
    text-align: center;
    place-items: center;
  }
`;

export const Micro = styled.div`
  div {
    padding: 60px;
    display: grid;
    place-items: center;
  }

  p {
    color: white;
    width: 31ch;
    animation: typing 4s steps(31), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    align-items: center;
    text-align: center;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 40%auto;
      }
    }

    @keyframes blink {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: orange;
      }
    }
  }
`;
