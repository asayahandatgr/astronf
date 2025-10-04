import bg2 from "../../../../public/assets/hero/img/herobg.png"

const Hero = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg2})`,
      }}
    >
      {/* Hero content here */}
    </div>
  );
}

export default Hero
