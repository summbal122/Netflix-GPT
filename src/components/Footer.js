
const Footer = () => {
  return (
    <div className="">
      <footer className="bg-[#141414] text-gray-400 px-6 md:px-20 py-7 md:py-20 text-sm">
  <div className=" lg:w-9/12 mx-auto">
    <div className="flex space-x-3 lg:space-x-6 mb-6">
      <i className="fa-brands fa-facebook-f text-[10px] md:text-sm 2xl:text-2xl hover:text-white"></i>
      <i className="fa-brands fa-instagram text-[10px] md:text-sm 2xl:text-2xl hover:text-white"></i>
      <i className="fa-brands fa-youtube text-[10px] md:text-sm 2xl:text-2xl hover:text-white"></i>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 text-[8px] md:text-sm 2xl:text-2xl">
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

    <button className="text-[10px] md:text-sm 2xl:text-2xl border border-gray-500 px-4 py-1 text-white hover:bg-gray-700 transition">
      Service Code
    </button>

    <p className="mt-4 text-[8px] md:text-xs text-gray-500">© 1997–2025 Netflix, Inc.</p>
  </div>
</footer>

      
    </div>
  )
}

export default Footer
