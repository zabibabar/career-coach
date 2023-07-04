import { Icon, SvgIconTypeMap } from "@mui/material";
import Image from "next/image";

const Logo = (props: SvgIconTypeMap<{}, "svg">["props"]) => {
  return (
    <Icon {...props}>
      ZABI BABAR
      {/* <Image src="logo.svg" alt="Zabi Babar Logo" fill /> */}
    </Icon>
  );
};

export default Logo;
