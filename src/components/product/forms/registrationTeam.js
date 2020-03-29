import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FilledInput from "../../material/FilledInput.js";
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from "../../material/InputLabel.js";

const TeamRegistration = () => {

    const [state, setState] = React.useState();

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

	return (
        <React.Fragment>
            <Grid container item spacing={2} xs={12}>
                <Grid item xs={12}>
                    <Typography component="h2">
                        Team Information:
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <FormControl variant="filled" fullWidth="true" required>
                        <InputLabel htmlFor="team-name">Team Name</InputLabel>
                        <FilledInput id="team-name" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <FormControl variant="filled" fullWidth="true" required>
                        <InputLabel htmlFor="team-contact">Team Main Contact</InputLabel>
                        <FilledInput id="team-contact" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <FormControl variant="filled" fullWidth="true" required>
                        <InputLabel htmlFor="team-contact-email">Contact Email</InputLabel>
                        <FilledInput type="email" id="team-contact-email" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <FormControl variant="filled" fullWidth="true" required>
                        <InputLabel htmlFor="team-contact-phone">Contact Phone Number</InputLabel>
                        <FilledInput type="tel" id="team-contact-phone" />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item spacing={2} xs={12}>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleChange}
                                    name="cancelation-agreement"
                                    color="primary"
                                />
                            }
                            label="I understand the tournament cancellation policy"
                        />
                        <FormHelperText>By 7/11/2019 - 75% Refund, 7/11 or later - No Refund</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
	)
}

export default TeamRegistration;
