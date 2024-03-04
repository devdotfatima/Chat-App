import React from "react";
import { Box, Divider, IconButton, Stack, useTheme } from "@mui/material";
import { Gear } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Nav_Setting } from "../../data";
import AntSwitch from "../../components/AntSwitch";
import ProfileMenu from "./ProfileMenu";
import useSettings from "../../hooks/useSettings";

const Sidebar = () => {
  const theme = useTheme();
  const path = useLocation();
  console.log({ path });
  const isActive = (route) => path.pathname === route;
  const { onToggleMode } = useSettings();

  return (
    <Box
      p={2}
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[10],
        width: 100,
      }}
    >
      <Stack
        direction="column"
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ width: "100%", height: "100%" }}
        spacing={3}
      >
        <Stack spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Logo} alt="chat app logo" />
          </Box>
          <Stack sx={{ width: "max-content" }} spacing={3} direction="column">
            {Nav_Buttons.map((el) => (
              <Link to={`${el.route}`}>
                <Box
                  key={el.index}
                  p={1}
                  sx={{
                    backgroundColor: isActive(el.route)
                      ? theme.palette.primary.main
                      : "#fff",
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      color: isActive(el.route) ? " #fff" : "#000",
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              </Link>
            ))}
            <Divider />
            <Link to={`${Nav_Setting[0].route}`}>
              <Box
                p={1}
                sx={{
                  backgroundColor: isActive(Nav_Setting[0].route)
                    ? theme.palette.primary.main
                    : "#fff",
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{
                    color: isActive(Nav_Setting[0].route) ? " #fff" : "#000",
                  }}
                >
                  <Gear />
                </IconButton>
              </Box>
            </Link>
          </Stack>
        </Stack>

        <Stack spacing={3} alignItems={"center"}>
          <AntSwitch callback={onToggleMode} />
          <ProfileMenu />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
