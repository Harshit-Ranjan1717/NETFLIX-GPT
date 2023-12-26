import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/contants";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch()
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        }))

        navigate("/browse")

      } else {
        dispatch(removeUser());
        navigate("/")

      }
    });

    return()=> unsubscribe() // when component will unmount 
    
  },[])
  return (
    <div className="flex  justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={LOGO}
        alt="LOGO"
      />
      {user && (
        <div className="flex p-2">
          <img src={user?.photoURL} alt="userIcon" className="w-12 h-12" />
          <button onClick={handleSignOut} className="font-bold text-white px-2">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

//src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
