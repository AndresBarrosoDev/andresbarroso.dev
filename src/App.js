import React from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/socials.css";
import github from "./assets/img/github.svg";
import linkedin from "./assets/img/linkedin.svg";
import whatsapp from "./assets/img/whatsapp.svg";
import spotify from "./assets/img/spotify.svg";
import telegram from "./assets/img/telegram.svg";


function App() {
  const openLink = (event, url) => {
    event.preventDefault();
    setTimeout(() => {
      window.open(url, "_blank");
    }, 500); 
  };

  return (
    <div className="app animate-home-component">
      <main className="app-container">
        <h1 className="name">Andrés Barroso</h1>
        <h3 className="professional-title">Software Developer</h3>
        <div className="social-container">
          <a
            className="social linkedin svg"
            href
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
              aria-label="Link to Andrés Barroso's linkedin account"
            ></object>
          </a>
          <a
            className="social github svg"
            href
            onClick={(event) =>
              openLink(event, "https://github.com/AndresBarrosoDev")
            }
          >
            <object
              data={github}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso's github account"
            ></object>
          </a>
          <a
            className="social telegram svg"
            href
            onClick={(event) =>
              openLink(event, "https://t.me/andresbarrosodev")
            }
          >
            <object
              data={telegram}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso's telegram account"
            ></object>
          </a>
          <a
            href
            className="social whatsapp svg"
            onClick={(event) =>
              openLink(event, "https://wa.me/56957107029")
            }
          >
            <object
              data={whatsapp}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso's whatsapp account"
            ></object>
          </a>
        
          <a
            className="social spotify svg"
            href
            onClick={(event) =>
              openLink(
                event,
                "https://open.spotify.com/user/guardianofabyss?si=3NlTp1mtRk62-_AGOCaZyg"
              )
            }
          >
            <object
              data={spotify}
              width="50"
              height="33"
              aria-label="Link to Andrés Barroso's spotify account"
            ></object>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
