import * as React from "react";
import { Box, BoxProps, Breakpoint, Typography, Grid } from "@mui/material";
import Image from "next/image";

type SectionProps = {
  title?: string;
  subTitle?: string;
  maxWidth?: Breakpoint;
  sideImageSrc?: string;
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
} & BoxProps;

const Section = ({
  children,
  title,
  subTitle,
  maxWidth,
  sideImageSrc,
  direction = "row",
  ...props
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <Box
      component="section"
      sx={{ px: { xs: 1, sm: 12 }, py: { xs: 12, sm: 12 } }}
      {...props}
    >
      <Grid
        container
        columnSpacing={12}
        rowSpacing={4}
        sx={{
          flexDirection: { xs: "column", md: direction },
          textAlign: {
            xs: "center",
            md: direction.includes("row") ? "start" : "center",
          },
        }}
        alignItems={{
          xs: "stretch",
          md: direction.includes("column") ? "stretch" : "center",
        }}
      >
        {title && (
          <Grid item xs={12} md={direction.includes("column") ? 12 : 4}>
            <Box mb={6}>
              <Typography variant="h2" component="h2">
                {title}
              </Typography>
              {subTitle && (
                <Typography mt={2} color="text.secondary">
                  {subTitle}
                </Typography>
              )}
            </Box>
            {sideImageSrc && (
              <Box
                width="100%"
                height={320}
                position="relative"
                borderRadius={2}
                overflow="hidden"
              >
                <Image src={sideImageSrc} alt="Side Image" fill />
              </Box>
            )}
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={!(title && !direction.includes("column")) ? 12 : 8}
          flexGrow={1}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
