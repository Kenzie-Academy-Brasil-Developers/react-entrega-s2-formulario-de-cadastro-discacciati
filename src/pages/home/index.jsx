import { useState } from "react";
import Signup from "../../components/signup";
import User from "../../components/user";

const Home = ()=>{

  const [user, setUser]= useState([]);

  return(
    <>  
        {user.length === 0
        ? <Signup setUser={setUser} />
        : <User user={user} setUser={setUser} />
        }
     </>)
}
export default Home