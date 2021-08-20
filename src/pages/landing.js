import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../assets/IMG_6301.webp";

export default function Landing() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <Col>
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </div>
  );
}
