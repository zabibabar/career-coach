import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "./Link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const pages = [
  { label: "Home", link: "/" },
  { label: "My Approach", link: "/my-approach" },
  {
    label: "About You",
    subMenu: [
      { label: "Highschool Student", link: "/highschool-student" },
      { label: "College Student", link: "/college-student" },
      { label: "Young Professional", link: "/young-professional" },
      { label: "International Student", link: "/international-student" },
    ],
  },
  { label: "Testimonials", link: "/testimonials" },
  { label: "Offerings", link: "/offerings" },
  { label: "Contact", link: "mailto:zabiubabar@gmail.com" },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [subMenu, setSubMenu] = React.useState<null | HTMLElement>(null);
  const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>) => {
    setSubMenu(event.currentTarget);
  };

  const handleCloseSubMenu = () => {
    setSubMenu(null);
  };

  return (
    <Box p={3}>
      <Toolbar disableGutters>
        {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={page.link}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo
            sx={{
              position: "relative",
              display: {
                xs: "flex",
                md: "none",
                width: "auto",
                height: 56,
                aspectRatio: 2.89,
              },
              mr: 1,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box> */}
        <Typography variant="h3" component="div">
          ZABI BABAR
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "end",
            alignItems: "center",
            display: { xs: "flex", md: "flex" },
            gap: 1,
          }}
        >
          {pages.map((page, index) => (
            <Button
              color="secondary"
              key={index}
              {...(page.subMenu
                ? { onClick: handleOpenSubMenu }
                : { component: Link })}
              href={page.link}
              sx={{
                my: 2,
                color: "text.secondary",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              {page.label}
            </Button>
          ))}
          <Menu
            anchorEl={subMenu}
            open={Boolean(subMenu)}
            onClose={handleCloseSubMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {pages
              .find(({ label }) => label === "About You")
              ?.subMenu?.map(({ label, link }, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseSubMenu}
                  component={Link}
                  href={link}
                >
                  {label}
                </MenuItem>
              ))}
          </Menu>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </Box>
  );
}
