
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#141414] text-gray-400 px-10 md:px-20 py-20 text-sm">
  <div className="max-w-5xl mx-auto">
    <div className="flex space-x-6 mb-6">
      <i className="fa-brands fa-facebook-f text-xl hover:text-white"></i>
      <i className="fa-brands fa-instagram text-xl hover:text-white"></i>
      <i className="fa-brands fa-youtube text-xl hover:text-white"></i>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
      <a href='/' className="hover:underline">Audio Description</a>
      <a href='/' className="hover:underline">Help Centre</a>
      <a href='/' className="hover:underline">Media Centre</a>
      <a href='/' className="hover:underline">Investor Relations</a>
      <a href='/' className="hover:underline">Jobs</a>
      <a href='/' className="hover:underline">Privacy</a>
      <a href='/' className="hover:underline">Legal Notices</a>
      <a href='/' className="hover:underline">Cookie Preferences</a>
      <a href='/' className="hover:underline">Contact Us</a>
      <a href='/' className="hover:underline">Gift Cards</a>
      <a href='/' className="hover:underline">Terms of Use</a>
      <a href='/' className="hover:underline">Corporate Information</a>
    </div>
\
    <button className="border border-gray-500 px-4 py-1 text-white hover:bg-gray-700 transition">
      Service Code
    </button>

    <p className="mt-4 text-xs text-gray-500">© 1997–2025 Netflix, Inc.</p>
  </div>
</footer>

      
    </div>
  )
}

export default Footer
