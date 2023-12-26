import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
    <div className="absolute -z-10 ">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login"
        />
      </div>
        <GptSearchBar></GptSearchBar>
        <GptMovieSuggestion></GptMovieSuggestion>
      
    </div>
  )
}

export default GptSearch
