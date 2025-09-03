import { SECTION_IMG_URL } from "../utils/Constants";
import SectionSignUpAbout from "./SectionSignUpAbout";
import topMovies from "../utils/Data";
const SectionSignUp = () => {
 
  return (
    <div className="bg-black ">
      <div className="bg-black w-full border-t-4  border-pink-800 rounded-t-[70px] flex flex-col items-center bg-gradient-to-b from-blue-700/15 to-black">
        <div className="flex flex-col w-9/12 gap-20 py-30 ">
          <div className="space-y-4">
            <h1 className="text-white text-2xl font-bold">Trending Now</h1>
            <div className="flex items-center gap-2 md:gap-4 overflow-x-auto md:overflow-visible">
              <i className="fa-solid fa-chevron-left hidden md:block text-xl text-white/70 bg-[#2d2d2d] py-12 px-1 border border-none rounded-md hover:cursor-pointer"></i>
              <div className="flex gap-6 md:gap-12 overflow-x-auto no-scrollbar">
                {topMovies.map((img, index) => (
                  <div key={index} className="flex items-end min-w-[150px] sm:min-w-[160px] md:min-w-[180px]">
                    <span
                      className="text-[60px] sm:text-[70px] md:text-[80px] font-extrabold text-black -mb-[-12px] mr-[-24px] z-10"
                      style={{ WebkitTextStroke: "1px white", lineHeight: 1 }}   >
                      {index + 1}
                    </span>
                    <img
                      className="rounded-lg w-[120px] sm:w-[160px] md:w-[200px] h-auto hover:cursor-pointer"
                      alt={`Top movie ${index + 1}`}
                      src={`${SECTION_IMG_URL}${img}`}
                    />
                  </div>
                ))}
              </div>
              <i className="fa-solid fa-chevron-right hidden md:block text-xl text-white/70 bg-[#2d2d2d] py-12 px-1 border border-none rounded-md hover:cursor-pointer"></i>
            </div>
          </div>
          <SectionSignUpAbout />
        </div>
      </div>
    </div>
  );
};

export default SectionSignUp;
