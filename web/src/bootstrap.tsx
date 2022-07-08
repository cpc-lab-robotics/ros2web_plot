import React from "react";
import ReactDOM from "react-dom/client";
import Grid from "@mui/material/Grid";

import Plot from "./Plot";

const App = () => (
  <Grid container>
    <Grid
      item
      xs={6}
      sx={{
        bgcolor: "#ccc",
        overflow: "hidden",
        border: "1px solid #ccc",
      }}
    >
      <Plot data={[]} layout={undefined} />
    </Grid>
  </Grid>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
