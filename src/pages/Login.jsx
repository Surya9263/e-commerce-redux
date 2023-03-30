import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGIN } from "../store/user/user.types";

function Login() {
  const toast = useToast();
  let creds = {
    email: "",
    password: "",
  };

  const [loginCreds, setLoginCreds] = useState(creds);

  const users = useSelector((store) => store.users);
  console.log(users);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleFormSubmit = () => {
    if (!loginCreds.email || !loginCreds.password) {
      toast({
        title: "All field are required",
        status: "warning",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      const filtered = users?.users?.filter(
        (user) => user.email === loginCreds.email
      );
      if (filtered.length == 0) {
        setLoginCreds(creds);
        toast({
          title: "User does not exists",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      } else if (filtered.length > 0) {
        if (
          filtered[0].email == loginCreds.email &&
          filtered[0].password == loginCreds.password
        ) {
          setLoginCreds(creds);
          dispatch({ type: USER_LOGIN, payload: loginCreds });
          toast({
            title: "User logged in successfully",
            status: "success",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
        } else {
          toast({
            title: "Incorect email or password",
            status: "error",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
        }
      }
    }
  };

  return (
    <FormControl width={"35%"} m="auto">
      <FormLabel>Email address</FormLabel>
      <Input
        onChange={handleChange}
        name="email"
        type={"email"}
        value={loginCreds.email}
        placeholder="First name"
      />
      <FormLabel>Enter password</FormLabel>
      <Input
        onChange={handleChange}
        name="password"
        type={"password"}
        value={loginCreds.password}
        placeholder="First name"
      />
      <Button
        mt={4}
        onClick={handleFormSubmit}
        backgroundColor={"black"}
        color="white"
        cursor={"pointer"}
        width="100%"
      >
        SIGN UP
      </Button>
    </FormControl>
  );
}

export default Login;
