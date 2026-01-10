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
          I’m a Computer Science Engineering student with a specialization in IoT,
          focused on building scalable full-stack web applications.
        </p>

        
      </div>
    </header>
  );
}

