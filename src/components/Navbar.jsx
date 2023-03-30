import { Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { USER_LOGOUT } from "../store/user/user.types";

function Navbar() {
  const users = useSelector((store) => store.users);

  const dispatch=useDispatch()

  const handleClick=(e)=>{
    console.log(e.target.innerText);
    if(e.target.innerText=="LOGOUT"){
        dispatch({type:USER_LOGOUT})
    }
  }

  return (
    <Flex
      backgroundColor={"black"}
      color="white"
      py={4}
      mb={10}
      justifyContent={"space-around"}
    >
      <Link to={"/"}>HOME</Link>
      {!users?.currentUser && <Link to={"/signup"}>SIGNUP</Link>}
      <Link onClick={handleClick} to={"/login"}>{!users?.currentUser?"LOGIN":"LOGOUT"}</Link>
    </Flex>
  );
}

export default Navbar;
