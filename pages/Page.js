"use client";
import { createSvgIcon } from "@mui/material/utils";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import React, { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import "@fontsource/roboto/400.css";

import ReactMarkdown from "react-markdown";
import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  Divider,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";

export default function Page() {  
  const [message, setMessage] = useState([
    {
      role: "assistant",
      content: `Hi! I'm the AI support assistant. How can I help you?`,
    },
  ]);

  const sendMessage = async () => {
    setUserMessage("");
    setMessage((message) => [
      ...message,
      { role: "user", content: userMessage },
      { role: "assistant", content: "" },
    ]);

    const response = fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ...message,
        { role: "user", content: userMessage },
      ]),
    }).then((res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let result = "";

      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Uint8Array(), {
          stream: true,
        });

        setMessage((message) => {
          let lastMessage = message[message.length - 1];

          let otherMessage = message.slice(0, message.length - 1);

          return [
            ...otherMessage,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });

        return reader.read().then(processText);
      });
    });
  };
  const [userMessage, setUserMessage] = useState("");

  const aiTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#00FF99" 
      },
      background: {
        default: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        paper:  "#00FF99",
      },
      text: {
        primary: "#E0E0E0",
        secondary: "#8E2DE2",
      },
    },
    typography: {
      fontFamily: "'Orbitron', sans-serif",
      h5: {
        color: "#00FF99",
      },
    },
    components:{
      MuiButton:{
        styleOverrides:{
          root: {
          textTransform: "none",
          borderRadius: "20px",
          boxShadow:"0px 4px 15px rgba(0, 255, 153, 0.5)",
          "&:hover": {
              boxShadow: "0px 6px 20px rgba(0, 255, 153, 0.7)",
          },
          transition: "all 0.3s ease",
         },
     }
    },
    MuiTextField:{
      styleOverrides:{
        root:{
          input:{
            color: "#E0E0E0",
          },
          "& .MuiOutlinedInput-root":{
             borderRadius: "20px",
            "& fieldset": {
              borderColor: "#00FF99",
            },
            "&:hover fieldset": {
              borderColor: "#FF5733",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00FF99",
            },
          }
 
        },
      },
          }
        }
    
});

  return (
    <>
      <ThemeProvider theme={aiTheme}>
        <CssBaseline />
        <Box
          width="100vw"
          height="100vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          }}
        >
          <Navbar />
          <Main
            handleSend={sendMessage}
            handleInput={(e) => {
              setUserMessage(e.target.value);
            }}
            InputValue={userMessage}
            messageData={message}
          />
        </Box>
      </ThemeProvider>

      <Analytics />
    </>
  );
}

function Navbar() {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between px-6 py-4 bg-transparent">
      <h1 className="text-2xl text-white">AI Support Assistant</h1>
      <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300">
        Log in
      </button>
    </div>
  );
}

function Main({ handleSend, handleInput, InputValue, messageData }) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-16">
      <ResultBox message={messageData} />
      <InputBox
        handleSend={handleSend}
        handleInput={handleInput}
        InputValue={InputValue}
      />
    </div>
  );
}

function ResultBox({ message }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className="flex flex-col w-full max-w-2xl h-4/5 p-4 space-y-4 overflow-y-auto">
      {message.map((msg, index) => (
        <div
          key={index}
          className={`flex w-full ${
            msg.role === "assistant" ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`p-4 rounded-lg shadow-md ${
              msg.role === "assistant"
                ? "bg-gray-800 text-cyan-400"
                : "bg-purple-700 text-white"
            } max-w-xs`}
          >
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            >
              {msg.content}
            </ReactMarkdown>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

function InputBox({ handleSend, handleInput, InputValue }) {
  return (
    <div className="flex items-center justify-center w-full max-w-2xl p-4 bg-gray-800 rounded-lg mt-4">
      <div className="flex items-center justify-between w-full">
        <input
          type="text"
          value={InputValue}
          onChange={handleInput}
          placeholder="Send a message"
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-full focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
}