import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import AntSwitch from "../../components/AntSwitch";

const Sidebar = () => {
  const theme = useTheme();
  const path = useLocation();
  const isActive = path.pathname === "/app";

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
              <Box
                key={el.index}
                p={1}
                sx={{
                  backgroundColor: isActive
                    ? theme.palette.primary.main
                    : "#fff",
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ color: "#fff" }} key={el.index}>
                  {el.icon}
                </IconButton>
              </Box>
            ))}
            <Divider />
            <IconButton>
              <Gear />
            </IconButton>
          </Stack>
        </Stack>

        <Stack spacing={3} alignItems={"center"}>
          <AntSwitch />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
