import React from 'react'
import Grid from '@material-ui/core/Grid';
import FilledInput from "../../material/FilledInput.js";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "../../material/InputLabel.js";

const CommentsField = () => {

	return (
        <Grid container item spacing={2} xs={12}>
            <Grid item xs={12}>
                <FormControl variant="filled" fullWidth="true">
                    <InputLabel htmlFor="questions-concerns">Questions, comments, concerns?</InputLabel>
                    <FilledInput id="questions-concerns" multiline rows="4"/>
                </FormControl>
            </Grid>
        </Grid>
	)
}

export default CommentsField;
