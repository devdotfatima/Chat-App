import {
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  Tooltip,
  Box,
  useTheme,
} from "@mui/material";
import { LinkSimple, Smiley } from "phosphor-react";
import { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import StyledInput from "../StyledInput";
import { useSearchParams } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import { Actions } from "../../config";
import { useSelector } from "../../redux/store";

const ChatInput = () => {
  const [openPicker, setOpenPicker] = useState(false);
  const [openActions, setOpenActions] = useState(false);
  const { sideBar } = useSelector((state) => state.app);
  const theme = useTheme();

  const isMobile = useResponsive("between", "md", "xs", "sm");

  return (
    <Stack sx={{ width: "100%" }}>
      <Box
        style={{
          zIndex: 10,
          position: "fixed",
          display: openPicker ? "inline" : "none",
          bottom: 81,
          right: isMobile ? 20 : sideBar.open ? 420 : 100,
        }}
      >
        <Picker
          theme={theme.palette.mode}
          data={data}
          onEmojiSelect={console.log}
        />
      </Box>
      {/* Chat Input */}
      <StyledInput
        fullWidth
        placeholder="Write a message..."
        variant="filled"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <Stack sx={{ width: "max-content" }}>
              <Stack
                sx={{
                  position: "relative",
                  display: openActions ? "inline-block" : "none",
                }}
              >
                {Actions.map((el) => (
                  <Tooltip placement="right" title={el.title} key={el.title}>
                    <Fab
                      onClick={() => {
                        setOpenActions(!openActions);
                      }}
                      sx={{
                        position: "absolute",
                        top: -el.y,
                        backgroundColor: el.color,
                      }}
                      aria-label="add"
                    >
                      {el.icon}
                    </Fab>
                  </Tooltip>
                ))}
              </Stack>

              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setOpenActions(!openActions);
                  }}
                >
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            </Stack>
          ),
          endAdornment: (
            <Stack sx={{ position: "relative" }}>
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setOpenPicker(!openPicker);
                  }}
                >
                  <Smiley />
                </IconButton>
              </InputAdornment>
            </Stack>
          ),
        }}
      />
    </Stack>
  );
};

export default ChatInput;
