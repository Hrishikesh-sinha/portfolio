import pfpImg from "../assets/pfp.jpg";

export default function Hero() {
  return (
    <header className="hero-container">
      <img
        src={pfpImg}
        className="profile-img"
        alt="Avatar"
      />

      <div className="hero-info">
        <h1>Hi, I'm Hrishikesh Anand</h1>

        {/* ABOUT / INTRO */}
        <p className="tagline">
          CSE student at VIT Vellore. I solve problems in Java, train models in Python
          and write code that runs on a chip strapped to your wrist.
        </p>

        
      </div>
    </header>
  );
}

