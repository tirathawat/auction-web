import React from "react";
import AppBar from "./components/AppBar";
import ProductList from "./components/Product/ProductList";
import Countdown from "./components/Countdown";
import Maintenance from "./components/Maintainance";
import Grid from "@mui/material/Grid";

const App: React.FC = () => {
  if (process.env.REACT_APP_MAINTENANCE_MODE === "true") {
    return <Maintenance />;
  }

  return (
    <Grid container direction="column" paddingBottom={10}>
      <Grid item>
        <AppBar />
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        paddingTop={12}
        paddingBottom={5}
      >
        <Countdown
          countdownDate={
            new Date(process.env.REACT_APP_AUCTION_END_TIME as string)
          }
        />
      </Grid>
      <Grid item sx={{ padding: "0 10%" }}>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default App;
