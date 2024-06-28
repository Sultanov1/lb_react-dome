import { Typography, Container, Box, TextField, Button, Grid } from '@mui/material';

const Contacts = () => {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" color="primary" gutterBottom>
          Contacts
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Get in touch with our colorful team!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Email" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
