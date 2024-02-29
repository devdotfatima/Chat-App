import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import ChatComponent from "./Conversation";
import Chat from "./Chat";

const GeneralApp = () => {
  const theme = useTheme();
  const [searchParams] = useSearchParams();

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chat />
        <Box
          sx={{
            height: "100%",
            width:
              //  sideBar.open
              //   ? `calc(100vw - 740px )`
              //   :
              "calc(100vw - 420px )",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
            borderBottom:
              searchParams.get("type") === "individual-chat" &&
              searchParams.get("id")
                ? "0px"
                : "6px solid #0162C4",
          }}
        >
          <ChatComponent />
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
