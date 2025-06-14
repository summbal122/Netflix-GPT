import Header from "./Header";


const SignUp = () => {
  
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/PK-en-20250609-TRIFECTA-perspective_fe615052-4a49-4618-b131-4499f9cf0058_small.jpg')]">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="relative z-10">
        <Header showButton={true} />

        <div className="flex justify-center items-center h-screen ">
          <div className="flex flex-col w-3xl py-14 px-12 gap-6 rounded-md items-center text-center">
            
            <h1 className="text-white text-6xl font-extrabold ">Unlimited movies, TV shows, and more</h1>
            <p className="text-white font-bold text-2xl">Starts at Rs 250. Cancel anytime.</p>
            <p className="text-white">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="flex gap-4 items-center w-full">
              <input
                type="text"
                placeholder="Email address"
                className="p-4 text-white bg-black/70 border border-gray-500 w-2/3 outline-none rounded-sm"
              />
              <button className="bg-button-red text-2xl text-white w-1/3  font-semibold p-3 cursor-pointer rounded-sm hover:opacity-95 ">Get Started <i class="fa-solid fa-chevron-right"></i> </button>
              
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
