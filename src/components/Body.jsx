import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter} from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"

const Body = () => {
    const dispath=useDispatch()


    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login></Login>
        },
        {
            path:"/browse",
            element:<Browse></Browse>
        },
    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispath(addUser({
            uid:uid,
            email:email,
            displayName:displayName
          }))

        } else {
          dispath(removeUser());

        }
      });
      
    },[])


  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body
