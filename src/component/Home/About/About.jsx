const sections = [
  {
    id: 1,
    title: "WHAT IS ASTRO 7.0",
    desc: "Program tahunan yang menggabungkan kompetisi, festival, dan talkshow inspiratif untuk membekali mahasiswa dengan berbagai keterampilan dan pengetahuan yang dibutuhkan untuk menjadi versi terbaik dari diri mereka.",
    bg: "bg-yellow-400",
    leftImg: "/assets/about/section1/bintangsection.png",
    badge: "/assets/about/section1/btn-tag-flag.png",
    rightImg: "/assets/about/section1/kartumainevent1.png",
    rightRotate: "-rotate-6",
  },
  {
    id: 2,
    title: "MISION",
    desc: "Menjadi pusat inspirasi dan pengetahuan bagi mahasiswa untuk mewujudkan potensi terbaik mereka dalam bidang teknologi, seni, dan olahraga serta bisa memberikan dampak positif untuk masyarakat.",
    bg: "bg-green-400",
    leftImg: "/assets/about/section2/kartusport1.png",
    rightImg: "/assets/about/section2/gemstone.png",
    rightRotate: "-rotate-12",
  },
  {
    id: 3,
    title: "VISION",
    desc: "Memberikan wadah yang inklusif dan inovatif bagi mahasiswa untuk mengasah keterampilan, mengembangkan bakat, dan memperluas wawasan melalui kompetisi, festival, dan talkshow inspiratif.",
    bg: "bg-blue-400",
    leftImg: "/assets/about/section3/circle.png",
    rightImg: "/assets/about/section3/kartuakademik1.png",
    rightRotate: "-rotate-6",
  },
];

const About = () => (
  <div className="w-full">
    {sections.map((section, idx) => (
      <section
        key={section.id}
        className={`${section.bg} border-b-8 border-black py-6 px-2 md:px-8 flex items-center relative min-h-[180px] ${
          idx === 0 ? "border-t-8" : ""
        }`}
      >
        {/* Badge untuk section 1 */}
        {idx === 0 && section.badge && (
          <img
            src={section.badge}
            alt="New"
            className="absolute left-2 top-2 w-16 z-10"
            style={{ filter: "drop-shadow(2px 2px 0 #000)" }}
          />
        )}
        {/* Left image */}
        <div className="w-[110px] md:w-[140px] flex justify-center items-center">
          <img
            src={section.leftImg}
            alt="left"
            className="w-full max-w-[110px] md:max-w-[140px] drop-shadow-lg"
            style={{ filter: "drop-shadow(4px 4px 0 #000)" }}
          />
        </div>
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center pl-2 md:pl-8 pr-2 md:pr-8">
          <h2
            className="font-extrabold text-2xl md:text-4xl text-white mb-2 text-left"
            style={{
              textShadow: "3px 3px 0 #000",
              letterSpacing: "1px",
            }}
          >
            {section.title}
          </h2>
          <p
            className="text-white font-semibold text-sm md:text-lg leading-snug text-left"
            style={{
              textShadow: "2px 2px 0 #000",
              letterSpacing: "0.5px",
            }}
          >
            {section.desc}
          </p>
        </div>
        {/* Right image */}
        <div className="w-[140px] md:w-[180px] flex justify-center items-center">
          <img
            src={section.rightImg}
            alt="right"
            className={`w-full max-w-[140px] md:max-w-[180px] drop-shadow-lg ${section.rightRotate}`}
            style={{ filter: "drop-shadow(4px 4px 0 #000)" }}
          />
        </div>
      </section>
    ))}
  </div>
);

export default About;