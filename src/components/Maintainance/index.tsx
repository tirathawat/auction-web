import { Box, Typography, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import maintenanceImage from "../../assets/maintainance.png";

export default function Maintainance() {
  return (
    <Box
      padding={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "background.paper",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box width="100%" height="auto">
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={maintenanceImage}
              alt="Under maintenance"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Maintenance
          </Typography>
          <Typography variant="body1" textAlign="center">
            Sorry, the website is currently under maintenance. Please check back
            later.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
