import { Box, IconButton, Stack } from "@mui/material";
import { PaperPlaneTilt } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useSearchParams } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import ChatInput from "./ChatInput";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Footer = () => {
  const theme = useTheme();

  const isMobile = useResponsive("between", "md", "xs", "sm");

  const [searchParams] = useSearchParams();

  const [openPicker, setOpenPicker] = React.useState(false);
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "transparent !important",
      }}
    >
      <Box
        p={isMobile ? 1 : 2}
        width={"100%"}
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction="row" alignItems={"center"} spacing={isMobile ? 1 : 3}>
          <Stack sx={{ width: "100%" }}>
            <Box
              style={{
                zIndex: 10,
                position: "fixed",
                display: openPicker ? "inline" : "none",
                bottom: 81,
                right: isMobile
                  ? 20
                  : searchParams.get("open") === "true"
                  ? 420
                  : 100,
              }}
            >
              <Picker
                theme={theme.palette.mode}
                data={data}
                onEmojiSelect={console.log}
              />
            </Box>
            {/* Chat Input */}
            <ChatInput openPicker={openPicker} setOpenPicker={setOpenPicker} />
          </Stack>
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%" }}
              alignItems={"center"}
              justifyContent="center"
            >
              <IconButton>
                <PaperPlaneTilt color="#ffffff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
