import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Switch,
  styled,
  useTheme,
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
const DashboardLayout = () => {
  const theme = useTheme();
  const path = useLocation();
  const { onToggleMode } = useSettings();
  const [checked, setChecked] = React.useState(true);

  const isActive = path.pathname === "/app";
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 16,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onToggleMode();
  };

  return (
    <>
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
            <AntSwitch checked={checked} onChange={handleChange} />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
