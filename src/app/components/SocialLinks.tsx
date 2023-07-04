import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "./Link";

export default function SocialLinks() {
  return (
    <Box display="flex" gap={2}>
      <SocialLink
        link="https://www.linkedin.com/in/zabibabar/"
        icon={<LinkedInIcon />}
      ></SocialLink>
    </Box>
  );
}

type SocialLinkProps = {
  link: string;
  icon: JSX.Element;
};

const SocialLink = ({ link, icon }: SocialLinkProps) => {
  return (
    <IconButton LinkComponent={Link} href={link} color="primary">
      {icon}
    </IconButton>
  );
};
