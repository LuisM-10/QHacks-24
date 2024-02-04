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
import "@picocss/pico";

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
            <Grid item xs={12} align="center">
                <Button style={{ marginRight: '5px' }} color="secondary" variant="contained" to="/" component={Link}>
                    Home
                </Button>
                <Button style={{ margin: '5px' }} color="secondary" variant="contained" to="/about" component={Link}>
                    About Us
                </Button>
                <Button style={{ marginLeft: '5px' }}color="secondary" variant="contained" to="/tool" component={Link}>
                    Generate
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    Generate a Blueprint
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center" style={{ color: '#D1E5FB'}}>Choose a Size</div>
                    </FormHelperText>
                    
                    <RadioGroup row defaultValue="256x256" onChange={handleSizeChange}>
                        <FormControlLabel 
                        value="256x256" 
                        control={<Radio style={{color: "#EFE5CE"}}/>}
                        label="256x256"
                        labelPlacement="bottom"
                        />

                        <FormControlLabel 
                        value="512x512" 
                        control={<Radio style={{color: "#EF959D"}}/>}
                        label="512x512"
                        labelPlacement="bottom"
                        />

                        <FormControlLabel 
                        value="1024x1024" 
                        control={<Radio style={{color: "#90DDD0"}}/>}
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
                    defaultPrompt={textPrompt}
                    InputProps={{
                        style: { color: "#D1E5FB", borderColor: "#052B2B"}
                    }}/>
                    <FormHelperText>
                        <div align="center" style={{ color: "#D1E5FB"}}>
                            Enter A Description of The Object to Generate a Blueprint of
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
        <Grid container spacing={1} justifyContent="center">
            <Grid item xs={2} align="center">
                <Button color="secondary" variant="contained" onClick={handleCreateButtonPress}>
                    Create
                </Button>
            </Grid>
        </Grid>


    </Grid>
    );
}