import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";


export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog , setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((preChatLog) => [...preChatLog, {type: "user", message: inputValue}]);

    setInputValue("");
  }

  const sendMessage = (message) => {
   const url = "https://api.openai.com/v1/chat/completions"; 
   const headers = {
     "Content-Type": "application/json",
     "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
   };
   const data = {
     model: "gpt-4",
     messages: [
             {
         role: "user",
         content: message
       }
     ]
     
   };
   setIsLoading(true);


   axios.post(url, data, {headers}).then((response) => {
    console.log(response);
    setChatLog((preChatLog) => [...preChatLog, {type: "bot", message: response.data.choices[0].message.content}]);
   })
  };

  return (
    <>
      <h1>AI chat</h1>

      {
        chatLog.map((message, index)=>(
          <div key={"index"}>
            <p>{message.type}</p>
            <p>{message.message}</p>

          </div>
        ))
      }
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your Text...." value={inputValue} 
         onChange={(e) => setInputValue(e.target.value)} />
         <button type="submit">Send</button>
      </form>
    </>
  );
}