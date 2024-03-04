import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import ChatComponent from "./Conversation";
import ChatList from "./ChatList";
import { useSelector } from "../../redux/store";

import Contact from "./RightSidebar/Contact";
import SharedMessages from "./RightSidebar/SharedMessages";
import StarredMessages from "./RightSidebar/StarredMessages";

const GeneralApp = () => {
  const theme = useTheme();
  const [searchParams] = useSearchParams();

  const { sideBar } = useSelector((state) => state.app);

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <ChatList />
        <Box
          sx={{
            height: "100%",
            width: sideBar.open
              ? `calc(100vw - 740px )`
              : "calc(100vw - 420px )",
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
        {sideBar.open &&
          (() => {
            switch (sideBar.type) {
              case "CONTACT":
                return <Contact />;

              case "STARRED":
                return <StarredMessages />;

              case "SHARED":
                return <SharedMessages />;

              default:
                break;
            }
          })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
