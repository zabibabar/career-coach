import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Section from "../components/Section";
import AboutYourselfSelections from "../components/AboutYourselfSelections";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import personas from "../personas";

export default function AboutYourself() {
  const [selection, setSelection] = React.useState(0);

  const currentPersona = React.useMemo(() => personas[selection], [selection]);

  return (
    <Section
      id="About-Yourself"
      direction="column"
      title="Tell Me About Yourself"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="start"
      >
        <AboutYourselfSelections
          selections={personas.map(({ title }) => title)}
          selection={selection}
          setSelection={setSelection}
        />

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" mb={6}>
              {currentPersona.subtitle}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {currentPersona.goals.map((goal, index) => (
              <Box key={index} mb={4}>
                <Box display="flex" gap={2} mb={2}>
                  <CheckIcon />
                  <Typography variant="h4">{goal.title}</Typography>
                </Box>
                <Typography color="text.secondary">{goal.desc}</Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              width="100%"
              height={320}
              position="relative"
              overflow="hidden"
            >
              <Image src={currentPersona.picture} alt="Side Image" fill />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
}
