import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "@picocss/pico";

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <body style={{ minHeight: "100vh", overflowY: "auto", textAlign: "center", position: "relative" }}>
                <style>
                        {`
                            ::-webkit-scrollbar {
                                width: 12px; 
                            }

                            ::-webkit-scrollbar-track {
                                background-color: #f1f1f1; 
                            }

                            ::-webkit-scrollbar-thumb {
                                background-color: #707070; 
                            }
                            
                            ::-webkit-scrollbar-corner {
                                background-color: #f1f1f1; 
                            }
                        `}
                    </style>
                <div>
                    <Button style={{ marginRight: "5px" }} color="secondary" variant="contained" to="/" component={Link}>
                        Home
                    </Button>
                    <Button style={{ margin: "5px" }} color="secondary" variant="contained" to="/about" component={Link}>
                        About Us
                    </Button>
                    <Button style={{ marginLeft: "5px" }}color="secondary" variant="contained" to="/tool" component={Link}>
                        Generate
                    </Button>

                    <h1 className="text-2xl font-bold">Meet the People Behind this!</h1>
                    
                    <div style={{ textAlign: "center", marginBottom: " 20px"}}>

                    {/* Luis */}
                    <p className="text-gray-600">Luis Magay <a href="https://github.com/LuisM-10" target="_blank" rel="noopener noreferrer">
                        <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/githubLight.png" 
                        alt="GitHub" style={{ width: "30px", height: "30px", margin: "5px" }} />
                    </a><a href="https://www.linkedin.com/in/luis-magay/" target="_blank" rel="noopener noreferrer">
                        <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/linkedIn.png" 
                        alt="LinkedIn" style={{ width: "50px", height: "50px", margin: "5px" }} />
                    </a> </p>
                    
                    <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/luisQhacks.jpg" alt="Luis" 
                        style={{ width: "500px", height: "700px" }} />


                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>Hi, my name is Luis and I"m currently a 2nd year Computer Science Co-op Student at 
                    Toronto Metropolitan University.</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>For this project I integrated React with Django to create a web application for 
                    Blue-Genesis. I used the Django REST framework</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>to create a REST API which handles POST requests
                    from the client (whenever a user wants to create a blueprint). Finally, I integrated</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small> OpenAI API and used the DALL-E-2 and DALL-E-3 models to 
                    create AI generated blueprints based on descriptions provided by the user.</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>Overall, I learned a lot from creating this project and it was a really enjoyable experience!</small></p> 
                    
                    </div>

                    {/* Sairus */}
                    <p className="text-gray-600" style={{ marginTop: "100px" }}>Sairus Pradhan <a href="https://github.com/saithevi7" target="_blank" rel="noopener noreferrer">
                        <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/githubLight.png" 
                        alt="GitHub" style={{ width: "30px", height: "30px", margin: "5px" }} />
                    </a><a href="https://www.linkedin.com/in/sairus-pradhan/" target="_blank" rel="noopener noreferrer">
                        <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/linkedIn.png" 
                        alt="LinkedIn" style={{ width: "50px", height: "50px", margin: "5px" }} />
                    </a> </p>

                    <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/sexy_sai.jpg" alt="Sairus" 
                        style={{ width: "500px", height: "700px" }} />


                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>Name"s Sairus and I"m currently a 3rd year Digital Media Game Arts Student at 
                    York University.</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>I"ve worked with many backend programs (python, Java, C#) and I have taken an
                    interest in front-end programming and development.</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>I worked on the front-end part of this project using React, Material UI, 
                    and picocss to design the website and integrate the backend to the frontend.</small></p>

                    {/* Eynard */}
                    <p className="text-gray-600" style={{ marginTop: "100px" }}>Eynard Marin <a href="https://github.com/eynard27" target="_blank" rel="noopener noreferrer">
                        <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/githubLight.png" 
                        alt="GitHub" style={{ width: "30px", height: "30px", margin: "5px" }} />
                    </a><a href="https://www.linkedin.com/in/eynard-marin-17a9081b2/" target="_blank" rel="noopener noreferrer">
                        <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/linkedIn.png" 
                        alt="LinkedIn" style={{ width: "50px", height: "50px", margin: "5px" }} />
                    </a> </p>

                    <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/eynardQhacks.jpg" alt="Eynard" 
                        style={{ width: "450px", height: "700px" }} />


                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>Hi, my name is Eynard and im currently a first year student at 
                    Humber studying Electrical Engineering Technology (control systems).</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>I have experience working with python, SQL, and am currently learning C. In this project I helped develop the backend</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>and the creation of the REST API, and also helped with the testing of the OpenAI blueprint generation.</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>Overall, I had a great time and learned new things and enjoyed working 
                    on this with my team.</small></p>

                    {/* Peter */}
                    <p className="text-gray-600" style={{ marginTop: "100px" }}>Peter Nguyen <a href="https://github.com/Pebl1" target="_blank" rel="noopener noreferrer">
                        <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/githubLight.png" 
                        alt="GitHub" style={{ width: "30px", height: "30px", margin: "5px" }} />
                    </a><a href="https://www.linkedin.com/in/peter-nguyen2" target="_blank" rel="noopener noreferrer">
                        <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/linkedIn.png" 
                        alt="LinkedIn" style={{ width: "50px", height: "50px", margin: "5px" }} />
                    </a> </p>

                    <img src="https://file.garden/ZTBDAMDJt13euhew/QHacks2024/peterQhack.jpg" alt="Eynard" 
                        style={{ width: "900px", height: "700px" }} />


                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>Hi, my name is Peter and I’m currently a third year finance student studying at TMU.</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>I’m currently learning python as my first language and aiming to master it, as well as expand into other languages.</small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>In this project I assisted in the development of the backend. This project although difficult has been a great learning experience. </small></p>
                    <p className="text-gray-600" style={{ marginBottom: "2px" }}><small>In the future I hope to do more hackathons as I expand my knowledge.</small></p>

                </div>
            </body>
        );
    }
}
