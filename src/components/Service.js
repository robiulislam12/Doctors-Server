import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Service({ img, title }) {
  return (
    <Grid item xs={4} sm={4} md={4} mt={4}>
      <div align="center">
        <img src={img} alt="" />
        <Typography variant="h5" color="#565E69" fontWeight={500} my={2}>
          {title}
        </Typography>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          esse officiis doloremque nostrum veniam sed commodi debitis harum.
          Voluptatibus, minus.
        </p>
      </div>
    </Grid>
  );
}
