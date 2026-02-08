import "./App.css";
import logo from "./assets/logo.png";
import Slider from "./components/Slider";
// import Card from "./components/Card";

function App() {
  const handleGetStarted = () => {
    window.scrollBy({
      top: 170,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="app-container">
        <div className="top-content">
          <img src={logo} alt="Netflix Logo" className="logo" />
          <div className="buttons">
            <button>English</button>
            <button>Sign In</button>
          </div>
        </div>

        <div className="content">
          <h1>
            Unlimited movies,<br /> shows, and more
          </h1>
          <h2>Starts at ₹149. Cancel at any time.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="input-group">
            <input type="email" placeholder="Email address" />
            <button onClick={handleGetStarted}>
              Get Started &gt;
            </button>
          </div>
        </div>

        
      </div>

      <div className="subapp-container">
       <Slider />

      </div>

    </>
  );
}

export default App;
