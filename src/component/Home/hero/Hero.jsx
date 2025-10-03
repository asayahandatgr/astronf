import bg1 from "../../../../public/assets/hero/img/background1.png"


const Hero = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      {/* Add hero content here if needed */}
    </div>
  );
}

export default Hero
