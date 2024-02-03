import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//export default class AiTool extends Component {
export default function AiTool(props) {
    
    //Define constants/default values
    const[size,setSize] = useState('256x256');
    const[textPrompt,setTextPrompt] = useState('');
    const navigate = useNavigate();

    //Handle Event Changes
    const handleSizeChange = event => {
        setSize(event.target.value);
      }
    const handleTextPromptChange = event => {
        setTextPrompt(event.target.value);
      }

    //Handle requests/responses everytime create button is pressed
    const requestOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text_prompt: textPrompt,
            size: size,
        })
      };

    const handleCreateButtonPress = () => {
        console.log(requestOptions)
        fetch("/api/tool",requestOptions)
        .then((response) => response.json())
        .then((data) => navigate("/image"));
      };
    
    //Frontend components
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Home
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    Generate an Image
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center">Choose a Size</div>
                    </FormHelperText>
                    
                    <RadioGroup row defaultValue="256x256" onChange={handleSizeChange}>
                        <FormControlLabel 
                        value="256x256" 
                        control={<Radio color="default"/>}
                        label="256x256"
                        labelPlacement="bottom"
                        />

                        <FormControlLabel 
                        value="512x512" 
                        control={<Radio color="primary"/>}
                        label="512x512"
                        labelPlacement="bottom"
                        />

                        <FormControlLabel 
                        value="1024x1024" 
                        control={<Radio color="secondary"/>}
                        label="1024x1024"
                        labelPlacement="bottom"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
                <Grid item xs={12} align="center">
                <FormControl>
                    <TextField 
                    required={true}
                    onChange={handleTextPromptChange}
                    defaultPrompt={textPrompt}/>
                    <FormHelperText>
                        <div align="center">
                            Enter Your Image Description Here
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" onClick={handleCreateButtonPress}>
                    Create
                </Button>
            </Grid>
        </Grid>
    );
}