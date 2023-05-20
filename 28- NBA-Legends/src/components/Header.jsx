import React from 'react'
import nbaLogo from "../assets/nba-logo.png"
import { Container, Image } from "react-bootstrap";


const Header = () => {
  return (
    <Container>
      <Image src={nbaLogo} alt="nba-logo" width="200" className='text-center'></Image>
      <h1 className="text-center fw-bold display-4 my-2">NBA Legends</h1>
    </Container>
    
  );
}

export default Header
