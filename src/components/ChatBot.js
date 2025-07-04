import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm MohanBot 🤖. Ask me anything!" }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    const botResponse = generateBotResponse(input);

    setMessages([...messages, userMessage, botResponse]);
    setInput('');
  };

  const generateBotResponse = (text) => {
    const msg = text.toLowerCase();
    let response = "I'm not sure about that. 😅";

    if (msg.includes("name")) response = "I'm MohanBot, your portfolio assistant!";
    else if (msg.includes("project")) response = "You can find Mohan's awesome projects in the Projects section.";
    else if (msg.includes("contact")) response = "Go to the Contact page or click the icons below!";
    else if (msg.includes("skills")) response = "Mohan is skilled in React, Node.js, PHP, and more!";
    else if (msg.includes("hi") || msg.includes("hello")) response = "Hello there! 👋";

    return { from: 'bot', text: response };
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">MohanBot</div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              placeholder="Ask me something..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
