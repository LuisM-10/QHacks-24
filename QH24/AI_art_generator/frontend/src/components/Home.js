import React, { Component } from "react";
import AiTool from "./AiTool";
import AboutUs from "./AboutUs";
import ImageDisplay from "./ImageDisplay";
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default class Home extends Component{
    constructor(props){
        super(props);
    }

//Sai write code here (pass html/css as element of first route)
    render(){
        return (<Router>
            <Routes>
                <Route exact path="/" element={<p>Home</p>} />
                <Route path="/tool" element={<AiTool />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/image" element={<ImageDisplay />} />
            </Routes>
        </Router>);
    }
}

