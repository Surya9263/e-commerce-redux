import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_SIGNUP } from "../store/user/user.types";

function Signup() {
  const toast = useToast();

  let creds = {
    name: "",
    email: "",
    password: "",
  };

  const [signupCreds, setSignupCreds] = useState(creds);
  const users = useSelector((store) => store.users);
  console.log(users);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupCreds({ ...signupCreds, [name]: value });
  };

  const handleFormSubmit = (e) => {
    if (!signupCreds.name || !signupCreds.email || !signupCreds.password) {
      toast({
        title: "All field are required",
        status: "warning",
        duration: 3000,
        position:"top",
        isClosable: true,
      });
    } else {
      const filtered = users?.users?.filter(
        (user) => user.email === signupCreds.email
      );
      if (filtered.length > 0) {
        setSignupCreds(creds);
        toast({
            title: "User already exists",
            status: "error",
            duration: 3000,
            position:"top",
            isClosable: true,
          });
      } else {
        setSignupCreds(creds);
        dispatch({ type: USER_SIGNUP, payload: signupCreds });
        toast({
          title: "User created successfully",
          status: "success",
          duration: 3000,
          position:"top",
          isClosable: true,
        });
      }
    }
  };

  return (
    <FormControl width={"35%"} m="auto">
      <FormLabel>Your name</FormLabel>
      <Input
        onChange={handleChange}
        name="name"
        value={signupCreds.name}
        placeholder="First name"
      />
      <FormLabel>Email address</FormLabel>
      <Input
        onChange={handleChange}
        name="email"
        type={"email"}
        value={signupCreds.email}
        placeholder="First name"
      />
      <FormLabel>Create password</FormLabel>
      <Input
        onChange={handleChange}
        name="password"
        type={"password"}
        value={signupCreds.password}
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

export default Signup;
