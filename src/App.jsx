import { useEffect, useRef, useState } from "react";
import "./index.css";
import { sendMessage } from "./openai.js";

function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messagesbyApi, setMessagesByApi] = useState([
    {
      text: "Hi, This is an AIBot",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd?.current?.scrollIntoView();
  }, [messagesbyApi]);

  const handleSend = async () => {
    // make a copy of the input
    const text = input;
    setInput("");

    setMessagesByApi([
      ...messagesbyApi,
      {
        text,
        isBot: false,
      },
    ]);
    setLoading(true);
    const res = await sendMessage(text);
    setMessagesByApi([
      ...messagesbyApi,
      {
        text,
        isBot: false,
      },
      {
        text: res,
        isBot: true,
      },
    ]);
    setLoading(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="upperside">
          <div className="upperside-top">
            <span className="logo">🤖</span>
            <span className="brand">AI BOT</span>
          </div>
          <button className="mid-btn">➕ New</button>
          <div className="upperside-bottom">
            <button className="query">
              <span className="queryicons">✉️</span> What is an Api?
            </button>
            <button className="query">
              <span className="queryicons">✉️</span> How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listitems">
            <span className="listitemsimg">🏠</span> Home
          </div>
          <div className="listitems">
            <span className="listitemsimg">❤️</span> Save
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {messagesbyApi.map((m, i) => {
            return (
              <div className={m.isBot ? "chat bot" : "chat"} key={i}>
                <span>{m.isBot ? "🤖" : "💬"}</span>
                {
                  <p className="txt">
                    <>
                      {loading ? (
                        <span>
                          <p className="txt">LOADING</p>
                        </span>
                      ) : (
                        <span>{m.text}</span>
                      )}
                    </>
                  </p>
                }
              </div>
            );
          })}
          <div ref={msgEnd}></div>
        </div>

        <div className="chatfooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a Message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="send" onClick={handleSend}>
              <span>📝</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
