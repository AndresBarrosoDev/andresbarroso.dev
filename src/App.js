import React from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/socials.css";
import discord from "./assets/img/discord.svg";
import github from "./assets/img/github.svg";
import linkedin from "./assets/img/linkedin.svg";
import whatsapp from "./assets/img/whatsapp.svg";

function App() {
  const openLink = (event, url) => {
    event.preventDefault();
    setTimeout(() => {
      window.open(url, "_blank");
    }, 500); 
  };

  return (
    <div className="app">
      <main className="app-container">
        <h1 className="name">Andrés Barroso</h1>
        <h3 className="professional-title ">Software Engineer</h3>
        <div className="social-container">
          <a
            className="social linkedin svg"
            href="https://www.linkedin.com/in/andresbarrosodev/"
            onClick={(event) =>
              openLink(
                event,
                "https://www.linkedin.com/in/andresbarrosodev/"
              )
            }
          >
            <object
              data={linkedin}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso's linkedin"
            ></object>
          </a>
          <a
            className="social github svg"
            href="https://github.com/AndresBarrosoDev"
            onClick={(event) =>
              openLink(event, "https://github.com/AndresBarrosoDev")
            }
          >
            <object
              data={github}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso's github"
            ></object>
          </a>
          <a
            href="https://wa.me/56957107029"
            className="social whatsapp svg"
            onClick={(event) =>
              openLink(event, "https://wa.me/56957107029")
            }
          >
            <object
              data={whatsapp}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso's whatsapp"
            ></object>
          </a>
          <a
            className="social discord svg"
            href
            onClick={(event) =>
              openLink(event, "https://your-discord-link")
            }
          >
            <object
              data={discord}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso's discord"
            ></object>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
