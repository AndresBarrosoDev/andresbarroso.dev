import "./App.css";
import "./assets/css/main.css"
import "./assets/css/socials.css";
import discord from "./assets/img/discord.svg";
import github from "./assets/img/github.svg";
import linkedin from "./assets/img/linkedin.svg";
import whatsapp from "./assets/img/whatsapp.svg";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="name">Andrés Barroso</h1>
        <h3 className="professional-title ">Software Engineer</h3>
        <div class="social-container">
          <a class="social linkedin svg" href="https://www.linkedin.com/in/andresbarrosodev/" target="_blank" rel="noreferrer">
            <object
              data={linkedin}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso linkedin"
            ></object>
          </a>
          <a class="social github svg" href="https://github.com/AndresBarrosoDev" target="_blank" rel="noreferrer">
            <object
              data={github}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso github"
            ></object>
          </a>
          <a
            href="https://wa.me/56957107029"
            class="social whatsapp svg"
            target="_blank"
            rel="noreferrer"
          >
            <object
              data={whatsapp}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso whatsapp"
            ></object>
          </a>
          <a class="social discord svg" href target="_blank" rel="noreferrer">
            <object
              data={discord}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso discord"
            ></object>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
