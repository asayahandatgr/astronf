
const Footer = () => {
  return (
    <footer id="partner" 
      className="w-full bg-[#faa51b] text-black text-center py-6" 
      style={{ 
        backgroundColor: '#faa51b',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Stack vertikal dengan card-like sections, Desktop: Horizontal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8">
          
          {/* Logo Section - Kiri */}
          <div className="flex-shrink-0 order-1 md:order-1">
            <div className="rounded-2xl p-4 md:p-0 md:rounded-none">
              <img
                src="/astro.png"
                alt="85T0 Logo"
                className="h-20 sm:h-28 md:h-40 w-auto pixelated mx-auto md:mx-0"
                style={{
                  filter: 'drop-shadow(4px 4px 0px #000)'
                }}
              />
            </div>
          </div>

          {/* Support by Section - Tengah */}
          <div className="flex-1 flex flex-col items-center order-2 md:order-2 w-full md:w-auto">
            <div className="rounded-2xl p-6 w-full max-w-sm md:max-w-none md:rounded-none md:p-0">
              <h3 className="text-black font-bold mb-4 text-center" style={{ 
                fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', 
                fontSize: '12px',
                
              }}>
                Support by:
              </h3>
              <div className="grid grid-cols-2 gap-4 md:flex md:gap-6 items-center justify-center">
                <div className="rounded-xl p-3 md:rounded-none md:p-0">
                  <img src="/pocari.png" alt="Pocari Sweat" className="h-10 w-auto mx-auto md:mx-0" />
                </div>
                <div className="rounded-xl p-3 md:rounded-none md:p-0">
                  <img src="/ortus.png" alt="Ortuseight" className="h-10 w-auto mx-auto md:mx-0" />
                </div>
                <div className="rounded-xl p-3 md:rounded-none md:p-0">
                  <img src="/kahf.png" alt="Kahf" className="h-10 w-auto mx-auto md:mx-0" />
                </div>
                <div className="rounded-xl p-3 md:rounded-none md:p-0">
                  <img src="/indomie.png" alt="Indomie" className="h-10 w-auto mx-auto md:mx-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links - Kanan */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 order-3 md:order-3 w-full md:w-auto">
            
            {/* About Column */}
            <div className="flex flex-col text-center sm:text-left rounded-2xl p-4 w-full sm:w-auto md:rounded-none md:p-0">
              <h4 className="text-black font-bold mb-3" style={{ 
                fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', 
                fontSize: '11px',
                
              }}>
                About:
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-black hover:text-gray-200 transition-colors block py-1 px-2 rounded-lg hover:bg-white/20" style={{ fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '9px' }}>How it works</a></li>
                <li><a href="#" className="text-black hover:text-gray-200 transition-colors block py-1 px-2 rounded-lg hover:bg-white/20" style={{ fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '9px' }}>Featured</a></li>
                <li><a href="#" className="text-black hover:text-gray-200 transition-colors block py-1 px-2 rounded-lg hover:bg-white/20" style={{ fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '9px' }}>Business Relations</a></li>
              </ul>
            </div>

            {/* Community Column */}
            <div className="flex flex-col text-center sm:text-left rounded-2xl p-4 w-full sm:w-auto md:rounded-none md:p-0">
              <h4 className="text-black font-bold mb-3" style={{ 
                fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', 
                fontSize: '11px',
                
              }}>
                Community:
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-black hover:text-gray-200 transition-colors block py-1 px-2 rounded-lg hover:bg-white/20" style={{ fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '9px' }}>Events</a></li>
                <li><a href="#" className="text-black hover:text-gray-200 transition-colors block py-1 px-2 rounded-lg hover:bg-white/20" style={{ fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '9px' }}>Partnerships</a></li>
                <li><a href="#" className="text-black hover:text-gray-200 transition-colors block py-1 px-2 rounded-lg hover:bg-white/20" style={{ fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '9px' }}>Invite a friend</a></li>
              </ul>
            </div>

            {/* Socials Column */}
            <div className="flex flex-col text-center sm:text-left rounded-2xl p-4 w-full sm:w-auto md:rounded-none md:p-0">
              <h4 className="text-black font-bold mb-3" style={{ 
                fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', 
                fontSize: '11px',
                
              }}>
                Socials:
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-black hover:text-gray-200 transition-colors block py-1 px-2 rounded-lg hover:bg-white/20" style={{ fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '9px' }}>Instagram</a></li>
                <li><a href="#" className="text-black hover:text-gray-200 transition-colors block py-1 px-2 rounded-lg hover:bg-white/20" style={{ fontFamily: '"Press Start 2P", system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '9px' }}>TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer