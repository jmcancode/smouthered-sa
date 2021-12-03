import React, {Fragment, useRef, useState} from "react";
// react-bootstrap
import {
    Row,
    Col,
    Image,
    Form,
    Button,
    Card
} from "react-bootstrap";
// framer-motion
import {motion} from "framer-motion";
// custom logos
import logo from "./assets/IMG_6303 2.webp";
import logo2 from "./assets/IMG_6301.webp"
// react-icons
import {AiOutlineDown, AiFillInstagram, AiFillMail, AiFillTwitterCircle} from "react-icons/ai";
// firebase data base
import {db} from "./firebase/config"


function App() {
    const scrollToRef = useRef();
    const [firstName,
        setFirstName] = useState("");
    const [lastName,
        setLastName] = useState("");
    const [email,
        setEmail] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        db
            .collection("subscribers")
            .add({firstName: firstName, lastName: lastName, email: email})
            .then(() => {
                alert("Thanks for joining the Smouthered mailing list! We can't wait to see you opening" +
                        " day.");
            })
            .catch((err) => {
                alert(err.message);
            });

        setFirstName("");
        setLastName("");
        setEmail("");
    };

    return (
        <Fragment>
            <div className="App">
                <div className="Landing">
                    <motion.div
                        initial={{
                        opacity: 0,
                        y: -50
                    }}
                        animate={{
                        opacity: 1,
                        y: 0
                    }}
                        className="container"
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100vh"
                    }}
                        id="#contact">
                        <Row xs={1} md={1} lg={1}>
                            <Col>
                                <Image
                                    className="p-4"
                                    src={logo}
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    style={{
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: "350px",
                                    maxHeight: "350px"
                                }}/>
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
                                    alignItems: "center"
                                }}
                                    onClick={() => scrollToRef.current.scrollIntoView()}>
                                    <small
                                        className="pb-3 text-uppercase"
                                        style={{
                                        color: "#f5f5f5"
                                    }}>
                                        Lets Connect
                                    </small>
                                    <AiOutlineDown
                                        className="animate__animated animate__bounce animate__repeat-4 animate__delay-1s"
                                        size={25}
                                        color="#f5f5f5"/>
                                </motion.div>
                            </Col>
                        </Row>
                    </motion.div>
                </div>
                <div className="Contact">
                <motion.div
                ref={scrollToRef}
                initial={{
                opacity: 0,
                y: -50
            }}
                animate={{
                opacity: 1,
                y: 0
            }}
                className=""
                style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh"
            }}>
                <Row xs={1} md={1} lg={1}>
                    <Col>
                        <Image
                            className="p-4"
                            fluid
                            src={logo2}
                            alt="logo"
                            width={100}
                            height={100}
                            style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "350px",
                            maxHeight: "350px"
                        }}/>
                    </Col>
                </Row>
                <Row xs={1} md={1} lg={1}>
                    <Col className="text-center">
                        <p className="text-white text-wrap">
                            Bringing New Mexico flavors to San Antonio, Texas! Sign-up for our mailing list
                            to be informed on our official opening date.
                        </p>
                    </Col>
                    <Col>
                        <Card
                            className="p-4 m-2 text-center"
                            style={{
                            backgroundColor: "transparent",
                            borderColor: "#c60000"
                        }}>
                            <Form onSubmit={onSubmit}>
                                <Form.Group className="p-2">
                                    <Form.Label className="text-white text-uppercase">
                                        Subscribe to our mailing list
                                    </Form.Label>
                                    <Form.Control
                                        style={{
                                        backgroundColor: "transparent",
                                        borderBottomLeftRadius: "0px",
                                        borderBottomRightRadius: "0px",
                                        borderLeftColor: "transparent",
                                        borderRightColor: "transparent",
                                        borderTopColor: "transparent"
                                    }}
                                        type="text"
                                        placeholder="first name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required/>
                                </Form.Group>
                                <Form.Group className="p-2">
                                    <Form.Control
                                        type="text"
                                        placeholder="last name"
                                        style={{
                                        backgroundColor: "transparent",
                                        borderBottomLeftRadius: "0px",
                                        borderBottomRightRadius: "0px",
                                        borderLeftColor: "transparent",
                                        borderRightColor: "transparent",
                                        borderTopColor: "transparent"
                                    }}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required/>
                                </Form.Group>
                                <Form.Group className="p-2">
                                    <Form.Control
                                        type="email"
                                        placeholder="fullname@gmail.com"
                                        style={{
                                        backgroundColor: "transparent",
                                        borderBottomLeftRadius: "0px",
                                        borderBottomRightRadius: "0px",
                                        borderLeftColor: "transparent",
                                        borderRightColor: "transparent",
                                        borderTopColor: "transparent"
                                    }}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required/>
                                </Form.Group>
                                <div className="d-grid gap-2 p-2 pt-3 ">
                                    <Button
                                        style={{
                                        backgroundColor: "transparent",
                                        borderColor: "white"
                                    }}
                                        type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col>
                        <h3 className="text-white">Connect with us</h3>
                    </Col>
                </Row>
                <Row className="pt-3 pb-5">
                    <Col>
                        <a
                            href="https://www.instagram.com/smoutheredsa"
                            rel="noopener noreferrer"
                            target="__blank">
                            <AiFillInstagram size={35} color="#c60000"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://twitter.com/" rel="noopener noreferrer" target="__blank">
                            <AiFillTwitterCircle size={35} color="#c60000"/>
                        </a>
                    </Col>
                    <Col>
                        <a
                            href="mailto:smouthered.sa@gmail.com?subject= Smouthered Inquiry"
                            rel="noopener noreferrer"
                            target="__blank">
                            <AiFillMail size={35} color="#c60000"/>
                        </a>
                    </Col>
                </Row>
            </motion.div>
                </div>

            </div>
        </Fragment>
    );
}

export default App;
