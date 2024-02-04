import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Image from 'mui-image'


export default class ImageDisplay extends Component{
    constructor (props){
        super(props);
        this.state = {
            text_prompt: "",
            size: "256x256",
            generated_image_url: ""
        };
        this.getImageDetails();
    }

    getImageDetails(){
        fetch('/api/get-image')
        .then(response => response.json())
        .then((data) => {
            this.setState({
                text_prompt: data.text_prompt,
                size: data.size,
                generated_image_url: data.generated_image_url
            });
        });
    }


    render(){
        return ( 
            <Grid container spacing={1} style={{overflowY: 'auto'}}>
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
                    <Typography style={{color: "#D1E5FB"}} component="h4" variant="h4" > 
                        {this.state.text_prompt.toString()}
                    </Typography>
                </Grid>

                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div style={{color: "#D1E5FB"}} align="center">{this.state.size.toString()}</div>
                        </FormHelperText>
                        </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <Image src={this.state.generated_image_url.toString()} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" to="/tool" component={Link}>
                         Generate Another Image
                    </Button>
                </Grid>
            </Grid>
        );
    }
}