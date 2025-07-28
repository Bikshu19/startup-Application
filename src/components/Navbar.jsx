function Navbar() {
  const links=[{"name":"Blog","link":""},{"name":"AADHYA TECH","link":""},{"name":"Contact","link":""}]
  return (
    <div className="relative bottom-6"> {/* No more bottom pushing here */}
      <div className="w-full fixed top--3 left-0 z-50 ">
        <header>
          <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="flex justify-center md:justify-start hover:cursor-pointer">
              <img
                src="./hey.png"
                alt="Logo"
                className="h-38 w-auto object-contain"
              />
            </div>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center gap-4 items-center mt-2 md:mt-0">
              {links.map((text, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-black px-4 py-2 rounded-full transition duration-300
                    hover:bg-[#22074d] hover:text-white hover:font-semibold"
                >
                  
                  {text.name}
                </a>
              ))}
            </nav>

            {/* Button */}
            <div className="flex justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0">
              <button className="inline-flex items-center font-semibold bg-white/30 backdrop-blur-md text-[#320A6B] border-0 py-1 px-3 rounded text-base hover:bg-white/50 hover:cursor-pointer">
                About
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
export default Navbar;