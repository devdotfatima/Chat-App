import { Stack, Box } from "@mui/material";
import React, { useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { SimpleBarStyle } from "../../components/Scrollbar";

import {
  ChatHeader,
  ChatFooter,
  Timeline,
  MediaMessage,
  ReplyMessage,
  LinkMessage,
  DocMessage,
  TextMessage,
} from "../../components/Chat";
import useResponsive from "../../hooks/useResponsive";
import { Chat_History } from "../../data";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   FetchCurrentMessages,
//   SetCurrentConversation,
// } from "../../redux/slices/conversation";
// import { socket } from "../../socket";

const Conversation = ({ isMobile, menu }) => {
  // const dispatch = useDispatch();

  // const { conversations, current_messages } = useSelector(
  //   (state) => state.conversation.direct_chat
  // );
  // const { room_id } = useSelector((state) => state.app);

  // useEffect(() => {
  //   const current = conversations.find((el) => el?.id === room_id);

  //   socket.emit("get_messages", { conversation_id: current?.id }, (data) => {
  //     // data => list of messages
  //     console.log(data, "List of messages");
  //     dispatch(FetchCurrentMessages({ messages: data }));
  //   });

  //   dispatch(SetCurrentConversation(current));
  // }, []);
  return (
    <Box p={isMobile ? 1 : 3}>
      <Stack spacing={3}>
        {Chat_History.map((el, idx) => {
          switch (el.type) {
            case "divider":
              return (
                // Timeline
                <Timeline el={el} key={idx} />
              );

            case "msg":
              switch (el.subtype) {
                case "img":
                  return (
                    // Media Message
                    <MediaMessage el={el} menu={menu} key={idx} />
                  );

                case "doc":
                  return (
                    // Doc Message
                    <DocMessage el={el} menu={menu} key={idx} />
                  );
                case "Link":
                  return (
                    //  Link Message
                    <LinkMessage el={el} menu={menu} key={idx} />
                  );

                case "reply":
                  return (
                    //  ReplyMessage
                    <ReplyMessage el={el} menu={menu} key={idx} />
                  );

                default:
                  return (
                    // Text Message
                    <TextMessage el={el} menu={menu} key={idx} />
                  );
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

const ChatComponent = () => {
  const isMobile = useResponsive("between", "md", "xs", "sm");
  const theme = useTheme();

  const messageListRef = useRef(null);

  // const { current_messages } = useSelector(
  //   (state) => state.conversation.direct_chat
  // );

  // useEffect(() => {
  // Scroll to the bottom of the message list when new messages are added
  // messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  // }, [current_messages]);

  return (
    <Stack
      height={"100%"}
      maxHeight={"100vh"}
      width={isMobile ? "100vw" : "auto"}
    >
      {/*  */}
      <ChatHeader />
      <Box
        ref={messageListRef}
        width={"100%"}
        sx={{
          position: "relative",
          flexGrow: 1,
          overflow: "scroll",

          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background,

          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <Conversation menu={true} isMobile={isMobile} />
        </SimpleBarStyle>
      </Box>

      {/*  */}
      <ChatFooter />
    </Stack>
  );
};

export default ChatComponent;

export { Conversation };
