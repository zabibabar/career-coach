import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Section from "../components/Section";

const accomplishments = [
  {
    title: "Courageous Risk-Taker",
    description: "Immigrated to the US Alone at 19",
  },
  {
    title: "Academic Trailblazer",
    description: "Graduated early with Honors and Summa Cum Laude",
  },
  {
    title: "Versatile Professional",
    description: "Experience working in Startup and Fortune 100 Companies",
  },
  {
    title: "Community-Minded",
    description: "Founded Tampa Volunteers to Give Back to the Community",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" title="Testimonials">
      <Grid container spacing={8}>
        {accomplishments.map(({ title, description }, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              px={2}
            >
              <Typography mb={2} variant="h6" component="div" fontWeight="bold">
                {title}
              </Typography>
              <Typography color="text.secondary" textAlign="center">
                {description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
