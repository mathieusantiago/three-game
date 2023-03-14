import React from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import "./Cover.css";
const Cover = ({setReady}) => {
  return (
    <div>
      <div className="stack">
        <Container>
            <Row className="">
                <div className='mt-5'>
                    <Image className='imgCover' src='/img/cover.png' fluid />
                    <Image className='TitleCoverGif' src='/img/CastelQuest.gif' fluid />
                    <Button className='BtnCoverGif' variant="danger" size="lg" onClick={() => setReady(true)}>Play Game▶️</Button>
                </div>
            </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cover;
