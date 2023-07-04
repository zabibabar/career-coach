import * as React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SocialLinks from "./SocialLinks";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ height: 64, width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="body2" align="center">
            Copyright © Zabi Babar {new Date().getFullYear()}.
          </Typography>
          <SocialLinks></SocialLinks>
        </Toolbar>
      </Container>
    </Box>
  );
}
