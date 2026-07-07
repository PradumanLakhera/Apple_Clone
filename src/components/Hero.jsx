import React from "react";

const Hero = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="hero">
      <div>
        <h1 className="Macbook">Macbook Pro</h1>
        <img src={`${base}title.png`} alt="Macbook Title" />
      </div>

      <video
        src={`${base}videos/hero.mp4`}
        autoPlay
        muted
        playsInline
      />

      <button className="buy-btn">Buy</button>

      <p className="para">
        From $6700 or $670/mo for 6–7 months
      </p>
    </section>
  );
};

export default Hero;