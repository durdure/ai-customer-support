`user client`
import React, {useState} from 'react'
import { Box, Stack, TextField, Button } from '@mui/material';


function Page() {

  const [messages, setMessages] = useState({
    messages: [
      { role: 'assistant', content: 'You are now connected to the chatbot' },
    ],
  });
  
  
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack 
        direction={'column'}
        width="500px"
        height="700px"
        border="1px solid black"
        p={2}
        spacing={3}
      >
        <Stack 
        direction={'column'}
        spacing={2}
        flexGrow={1}
        overflow="auto"
        maxHeight="100%"
        >
          {messages.messages.map((messages, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                messages.role === 'assistant' ? 'flex-start' : 'flex-end'
              }
            >
               <Box
                bgcolor={
                  messages.role === 'assistant'
                    ? 'primary.main'
                    : 'secondary.main'
                }
                color="white"
                borderRadius={16}
                p={3}
              >
                {messages.content}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField
            label="Message"
            fullWidth
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
          />
          <Button variant="contained" onClick={sendMessage}>
            Send
          </Button>
        </Stack>
      </Stack>

    </Box>
  )
}

export default Page