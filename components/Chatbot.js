import { useState } from "react";
import axios from "axios";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newChat = [...chat, { role: "user", content: message }];
    setChat(newChat);
    setMessage("");

    try {
      const response = await axios.post("/api/chat", { messages: newChat });
      setChat([...newChat, { role: "assistant", content: response.data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setChat([...newChat, { role: "assistant", content: "Error: Unable to get a response." }]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        {chat.map((msg, index) => (
          <div key={index} className={`${styles.message} ${msg.role === "user" ? styles.userMessage : styles.botMessage}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
