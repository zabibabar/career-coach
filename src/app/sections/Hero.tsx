import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "../components/Link";
import Image from "next/image";
import Section from "../components/Section";

const Hero = () => {
  return (
    <Section>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={12}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h1" gutterBottom>
            Discover Your Uncharted
            <Typography variant="h1" component="span" color="primary">
              {" "}
              Potential
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            color="text.secondary"
            gutterBottom
          >
            Build unwavering confidence, develop effective coping mechanisms,
            and conquer imposter syndrome as you navigate your schooling and
            early career
          </Typography>
          <Box mt={3}>
            <Button
              variant="contained"
              component={Link}
              href="contact"
              disableElevation
            >
              {"Let's Connect"}
            </Button>
          </Box>
        </Box>
        <Box display="inherit" borderRadius="50%" bgcolor="secondary.main">
          <Image
            src="/profile.png"
            width={312}
            height={355.3}
            alt="Picture of Zabi Babar"
          />
        </Box>
      </Box>
    </Section>
  );
};

export default Hero;
