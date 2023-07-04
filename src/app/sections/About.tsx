import * as React from "react";
import Section from "../components/Section";
import { Box, Grid, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const accomplishments = [
  {
    title: "Courageous Risk-Taker",
    description: "Immigrated to the US alone at 19",
    icon: <FlightTakeoffIcon />,
  },
  {
    title: "Academic Trailblazer",
    description: "Graduated early with Honors and Summa Cum Laude",
    icon: <SchoolIcon />,
  },
  {
    title: "Versatile Professional",
    description: "Experience working in Startup and Fortune 100 Companies",
    icon: <BusinessIcon />,
  },
  {
    title: "Community-Minded",
    description: "Founded Tampa Volunteers to Give Back to the Community",
    icon: <VolunteerActivismIcon />,
  },
];

export default function About() {
  return (
    <Section
      id="about"
      direction="row"
      title="Learn From Someone Who Has Done It"
      sideImageSrc="undraw_astronaut_re_8c33.svg"
    >
      <Grid container spacing={4}>
        {accomplishments.map(({ title, description, icon }, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={2}
              p={3}
              sx={{ borderRadius: 4, border: 1, borderColor: "divider" }}
            >
              <Box
                bgcolor="primary.main"
                color="primary.contrastText"
                borderRadius={4}
                p={1}
              >
                <icon.type sx={{ height: 64, width: 64 }}></icon.type>
              </Box>
              <Typography variant="h4" textAlign="start">
                {title}
              </Typography>
              <Typography color="text.secondary" textAlign="start">
                {description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
