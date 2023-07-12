import * as React from "react";
import { Box } from "@mui/material";

type SelectionProps = {
  selections: string[];
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
};

export default function AboutYourselfSelections({
  selections = [],
  selection,
  setSelection,
}: SelectionProps) {
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
        px={3}
        py={1}
        gap={1}
        mb={5}
      >
        {selections.map((s, index) => (
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
            py={1}
            px={3}
            mx={1}
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
}
