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

export default function AboutYourself() {
  const [selection, setSelection] = React.useState(0);

  return (
    <Section
      id="About-Yourself"
      direction="column"
      title="Tell Me About Yourself"
    >
      <Selection selection={selection} setSelection={setSelection} />
    </Section>
  );
}

type SelectionProps = {
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
};

const Selection = ({ selection, setSelection }: SelectionProps) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        flexDirection={{ xs: "column", sm: "row" }}
        borderColor="divider"
        border={1}
        borderRadius={4}
        p={2}
        gap={1}
      >
        {[
          "Highschool Student",
          "College Student",
          "Young Professionals",
          "International (F-1) Student",
        ].map((s, index) => (
          <Box
            key={index}
            {...(index === selection
              ? {
                  color: "primary.contrastText",
                  backgroundColor: "primary.main",
                }
              : {
                  sx: {
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      color: "secondary.contrastText",
                      backgroundColor: "secondary.main",
                      cursor: "pointer",
                    },
                  },
                })}
            p={2}
            borderRadius={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => setSelection(index)}
          >
            {s}
          </Box>
        ))}
      </Box>
    </>
  );
};
