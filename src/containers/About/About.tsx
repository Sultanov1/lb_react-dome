import { Typography, Container, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" color="secondary" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Information about our vibrant company.
        </Typography>
      </Box>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="body1" color="textPrimary">
          Our company specializes in providing high-quality services and products to our customers.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
