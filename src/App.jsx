import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const [text, setText] = useState("Yes");
  const [text3, setText3] = useState();
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [text2, setText2] = useState("Would you be my Valentine?");
  const [scale, setScale] = useState(1);
  const [clicks, setClicks] = useState(0);
  const [imgSrc, setImgSrc] = useState(
    "https://th.bing.com/th/id/OIP.ime3KO1iYfd9lSNap_TmnwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  );
  const [imgSrc2, setImgSrc2] = useState(
    "https://th.bing.com/th/id/OIP.zHIFD4re90W-F4RE7VeCdQHaFp?w=227&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  );
  const [imgSrc3, setImgSrc3] = useState(
    "https://th.bing.com/th/id/OIP.zHIFD4re90W-F4RE7VeCdQHaFp?w=227&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  );


  function yesFunc() {
    if (clicks <= 1) {
      setText("URGHAA CLICK YES❤️");
    } else {
      setText("URGHAAAAAAAA")
      setScale(prev => prev + 0.5);
    }
    setScale(prev => prev + 0.1);
    setClicks(prev => prev + 1);
  }

  function yayFunc() {
    setText("CONFETTI")
    setText3("HAPPY VALENTINE'S!!!!!!!!!!!")
    setButtonsVisible(false);
    setText2("YAYYYYYYYYYYYYYYY ❤️❤️❤️❤️❤️❤️❤️❤️ \n YOU ARE MINE HEHE")
    setImgSrc3("https://media1.tenor.com/m/k8ouEsLbzL4AAAAC/happy-emoji.gif")
    setImgSrc2("https://media1.tenor.com/m/k8ouEsLbzL4AAAAC/happy-emoji.gif")
    setImgSrc("https://www.bing.com/th/id/OGC.01d845314b15b4f6c8861a724cd7f354?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.tenor.com%2fej_uvg93_v8AAAAM%2fyippee-iluvmybf.gif&ehk=ygCLb5PZIfPxdd7AhwIbm6GT1%2f%2bocMANFu%2fX%2fP1ldDQ%3d")
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
    });
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.3, y: 0.7 },
    });
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.7, y: 0.7 },
    });
  }
  return (
    <div className="App">

      <header className="App-header">
        <p>
          {text3}
        </p>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center", justifyContent: "center" }}>
          <img src={imgSrc2} className="App-logo" alt="logo" style={{ width: "30%" }} />
          <img src={imgSrc} className="App-logo" alt="logo" id="yay" style={{ width: "30%" }} />
          <img src={imgSrc3} className="App-logo" alt="logo" id="yay" style={{ width: "30%" }} />
        </div>

        <p>
          {text2} <span className="heart">♥️</span>
        </p>

        <div className="button-row" >
          <button type="button" id="yes" onClick={yayFunc} style={{
            transform: `scale(${scale})`,
            transition: "transform 0.15s ease",
          }}>
            {text}
          </button>

          <button type="button" onClick={yesFunc} style={{ display: buttonsVisible ? "flex" : "none" }}>
            I dare u to say no
          </button>
        </div>



      </header>
    </div>
  );
}

export default App;
