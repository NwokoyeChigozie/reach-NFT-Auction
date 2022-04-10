import "./App.css";
// import React, { useState } from "react";
import { Container, Button, Row, Stack } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header">NFT Auction Dapp</h1>
          <hr></hr>
          <br></br>
          <Container>
            <Row>
              <h4 className="intro">
                You can either join an auction as a creator or as a bidder
              </h4>
            </Row>

            <Stack
              className="justify-content-md-center"
              direction="horizontal"
              gap={2}
            >
              <Button variant="primary">Creator</Button>
              <div className="vr" />
              <Button variant="secondary">Bidder</Button>
            </Stack>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default App;
