import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../assets/IMG_6303 2.webp";
import { AiOutlineDown } from "react-icons/ai";
export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Row xs={1} md={1} lg={1}>
        <Col>
          <Image
            className="p-4"
            src={logo}
            alt="logo"
            width={100}
            height={100}
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
      <Row xs={1} md={1} lg={1}>
        <Col className="text-center">
          <motion.div
            className="pt-5 mt-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <small className="pb-3" style={{ color: "#f5f5f5" }}>
              Scroll Down
            </small>
            <AiOutlineDown size={25} color="#f5f5f5" />
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
}
