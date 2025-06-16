import IMG from "../images/Netflix_Logo.png";

const Header = ({showButton}) => {
  
  return (
    <div className="px-32 py-1 flex items-center justify-between" >
      <img className="w-48" src={IMG}
      alt="logo" />
       
      {showButton && (
        <div> 

        <button className="text-white bg-button-red py-1.5 px-4 text-sm font-semibold  rounded-sm">
          <a href="/login"> Sign In </a> 
          </button>  
          </div>

      )}
      
    </div>
  )
};

export default Header
