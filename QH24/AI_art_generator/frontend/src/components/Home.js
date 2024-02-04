import React, { Component } from "react";
import AiTool from "./AiTool";
import AboutUs from "./AboutUs";
import ImageDisplay from "./ImageDisplay";
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";
import "@picocss/pico";

export default class Home extends Component{
    constructor(props){
        super(props);
    }

//Sai write code here (pass html/css as element of first route)
    render(){

        return (<Router>
            <Routes>
                <Route exact path="/" element={
                <body style={{ textAlign: "center", overflowY: "scroll"}}>
                    

                    <Button style={{ marginRight: "5px" }} color="secondary" variant="contained" to="/" component={Link}>
                    Home
                    </Button>
                    <Button style={{ margin: "5px" }} color="secondary" variant="contained" to="/about" component={Link}>
                    About Us
                    </Button>
                    <Button style={{ marginLeft: "5px" }}color="secondary" variant="contained" to="/tool" component={Link}>
                    Generate
                    </Button>

                    <div className="main__container"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            alignItems: "center",
                            justifySelf: "center",
                            margin: "0 auto",
                            minHeight: "90vh",
                            backgroundColor: "#141414",
                            zIndex: "1",
                            width: "100%",
                            maxWidth: "100%",
                            padding: "0 50px"
                            }}> 

                            <h1     
                            style={{ 
                            fontSize: "4rem",
                            backgroundImage: "linear-gradient(to top, #b721ff 0%, #21d4fd 100%)",
                            backgroundSize: "100%",
                            WebkitBackgroundClip: "text",
                            MozBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            MozTextFillColor: "transparent"
                            }}>BLUE- GENESIS</h1>
                                
                            <div className="main__img--container">
                            <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/Homepage.svg" alt="homepage" 
                            style={{ textAlign: "center" }}/>
                            </div>

                            <Button style={{  
                                marginBottom: "350px",
                                fontSize: "1rem",
                                background: "#cf556c",
                                padding: "14px 32px", 
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                position: "relative",
                                transition: "all 0.35s",
                                outline: "none",
                                width: "150px", 
                                alignItems: "center",
                                justifySelf: "center"                                                                   
                                }} 
                                color= "primary" variant="contained" to="/tool" component={Link}>
                                    Start
                                </Button>

                                
                                <p style={{
                                    backgroundColor: "#ff8177",
                                    backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
                                    backgroundSize: "100%",
                                    marginTop: "50px",
                                    marginRight: "500px",
                                    fontSize: "2.5rem",
                                    WebkitBackgroundClip: "text",
                                    MozBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    MozTextFillColor: "transparent",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifySelf: "center",
                                    width: "100%"                                 
                                }}
                                >What will you create?</p>

                        </div>                   
                </body>

                } />
                <Route path="/tool" element={<AiTool />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/image" element={<ImageDisplay />} />
            </Routes>
        </Router>);
    }
}

