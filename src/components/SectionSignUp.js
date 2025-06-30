import { SECTION_IMG_URL } from "../utils/Constants";
import SectionSignUpAbout from "./SectionSignUpAbout";

const SectionSignUp = () => {
  const topMovies = [
    "AAAABYVcRfFB91jy3f8-_Alb6H4RUzqXFRA7ejjOfCOXF20XLRVeCyT3ZFEimKbZAimt2ayVUWXSnp6ApNxpoK0mA3XzJD__irrDkdMD6lDrOFPSvQqP8s0xn2dNBaU9JxIu4lUd.webp?r=63b",
    "AAAABYUCgDPIk4LvnEw_j-dC5ca65oxm4yP2Z7RFKlRcN6WYzCwNA4MhTNqTRrSAK9zND3cSjrYEpbQculmTCXPD09ZbvdCosdbuOjc.webp?r=062",
    "AAAABZFBdXweIqorvQIPkQbuKg9rFcZJJ8yCUzSX1ySYOsmrcMeUgLlY3YWvFcXee7lFjHwMT_Ofd03ttH-rTzAHPZskA6K-f4imBAY.webp?r=81d",
    "AAAABZ2Btia34ViHOdbGThR2xD0XYVD9vkdTkUULeET8PcHeq12ebMOJyLaTD1yS26NaRfUqDMknk2XnomOCg78WEKeN3VEDdOKzFRayBGveEZ-MeOaVD-v0z5P25idICKgt-nXX.webp?r=a1c",
    "AAAABUk_n3x3jpcR829IYPtiuC8PbrcYSJqBAPtuo0KvFV0Olp7A65H-QzhvaU8HR5D-b9MExs3uQrEYHJ45f0zXK3Ok3QhPXJm_bXnU-d-aWa_oFbxsrL0Wqi62NORZPy99pV8f.webp?r=3da",
    "AAAABbT2qAYsSSeoFZm3OFNQOcHhNr16KSAVssEPQ1n2UvTEhiCRfP2uNQwqwAiL45_0Izlb2tna8O2hJ6y2WfVymI-7o8SwlLmcq_o.webp?r=013",
    "AAAABfrQ-ytQxZb4vAuUegqLRC6Mzo4qEMKBNKiYSsEqK16hUyXOUO2f7CZchxO_b4lhknmpf0C2ocJMYF1jChy3YpV3M5Osq7oVADhGKdJWQyaHA50EtvmM0TdxspGTAbQQHctr.webp?r=d36",
    "AAAABQzXaGfD-AkdJYI8dTxdVCMHaEKLuB-za_6PRMt6qN8GzCNxzT0rP-njK5RM5nQ3hbyrteXaLslVDxXEs1zhhwV0xq6-piKQwFUOrrkuwBr-omC8vt0Nhx1PCYt1jgkRHmyY.webp?r=3f5",
    "AAAABUk_n3x3jpcR829IYPtiuC8PbrcYSJqBAPtuo0KvFV0Olp7A65H-QzhvaU8HR5D-b9MExs3uQrEYHJ45f0zXK3Ok3QhPXJm_bXnU-d-aWa_oFbxsrL0Wqi62NORZPy99pV8f.webp?r=3da",
    "AAAABYGL4_ns5MGTE5-Yd3ZQVB5apyY9yxQ39lxjT_27ehdoGzrxRwNc4osgXEeifcv9yO_MgMySL-p6hMxtQZnIEkZmyglIJ7wm7ik.webp?r=c23",
  ];
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
                      style={{ WebkitTextStroke: "1px white", lineHeight: 1 }}
                    >
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
