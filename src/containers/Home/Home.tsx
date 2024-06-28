import { Typography, Container, Box, Card, CardContent, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" color="primary" gutterBottom>
          Home
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Welcome to our colorful homepage!
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Feature One
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description of the first feature.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Feature Two
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description of the second feature.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Feature Three
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description of the third feature.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
