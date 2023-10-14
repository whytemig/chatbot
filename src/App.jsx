import "./index.css";

function App() {
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
              <span className="queryicons">✉️</span> blah blah
            </button>
            <button className="query">
              <span className="queryicons">✉️</span> blah blah 2
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
          <div className="chat bot">
            <span>🤖</span>
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            </p>
          </div>

          <div className="chat">
            <span>💬</span>
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            </p>
          </div>
        </div>
        <div className="chatfooter">
          <div className="inp">
            <input type="text" placeholder="Send a Message" />
            <button className="send">
              <span>📝</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
