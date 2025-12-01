import Logo from "../assets/Logo.png";

const Footer = () => {
  const footerLinks = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    ["Media Center", "Terms of Use", "Contact Us", "Netflix Originals"],
  ];

  return (
    <footer className="bg-black text-gray-400 select-none pt-10 pb-6 px-6 md:px-16">
      {/* Logo */}
      <div className="mb-6">
        <img src={Logo} alt="Netflix Logo" className="w-36 object-contain" />
      </div>

      {/* Footer Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm md:text-base mb-8">
        {footerLinks.flat().map((link, idx) => (
          <a
            key={idx}
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Contact & Language */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-6 mb-6 text-gray-500 text-sm">
        <span>
          Questions? Call{" "}
          <a href="tel:1800123456" className="hover:underline text-white">
            1800-123-456
          </a>
        </span>
        <select className="bg-black border border-gray-600 text-gray-400 px-3 py-2 rounded cursor-pointer focus:outline-none focus:border-white transition">
          <option>English</option>
          <option>हिंदी</option>
          <option>Español</option>
        </select>
      </div>

      {/* Copyright */}
      <div className="text-gray-500 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Netflix, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
