"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom"; // Use Next.js Link for navigation
import Cookies from "js-cookie";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const toast = useToast();
  const navigate = useNavigate();
  // Handle form input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    if (!formData.username) {
      formErrors.username = "Username is required";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    }
    return formErrors;
  };

  const user = localStorage.getItem("user");

  useLayoutEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      // Make a POST request to your backend API for login
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Login successful!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        // Redirect to dashboard or another page
        let user = JSON.parse(JSON.stringify(data?.user));
        console.log("@@akddd", response);
        user["authToken"] = data?.accessToken;
        user["refreshToken"] = data?.refreshToken;
        localStorage.setItem("user", JSON.stringify(user));
        Cookies.set("authToken", data?.accessToken, { expires: 7 });
        Cookies.set("refreshToken", data?.refreshToken, { expires: 10 });

        navigate("/");
        window.location.reload();
      } else {
        toast({
          title: "Login failed!",
          description: data.message || "Invalid username or password.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast({
        title: "An error occurred!",
        description: "Unable to log in. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }

    setLoading(false);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"start"} // Align items at the start to bring it a bit up
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      px={{ base: "4", md: "8" }}
      overflow="hidden" // Ensure no scrollbar
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={{ base: "xs", md: "md", lg: "lg" }}
        py={8} // Adjusted for less padding
        px={6}
        w="100%"
      >
        <Stack align={"center"}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>
            Sign in to your account
          </Heading>
          <Text fontSize={{ base: "sm", md: "lg" }} color={"gray.600"}>
            to enjoy all of our cool{" "}
            <Text as="span" color={"blue.400"}>
              features
            </Text>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="username" isRequired isInvalid={errors.username}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  _focus={{ boxShadow: "outline", borderColor: "blue.400" }}
                />
                {errors.username && (
                  <Text color="red.500" fontSize="sm">
                    {errors.username}
                  </Text>
                )}
              </FormControl>
              <FormControl id="password" isRequired isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    _focus={{ boxShadow: "outline", borderColor: "blue.400" }}
                  />
                  <InputRightElement>
                    <Button
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <Text color="red.500" fontSize="sm">
                    {errors.password}
                  </Text>
                )}
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link to={"/forgot-password"} passHref>
                    <Text color={"blue.400"} _hover={{ cursor: "pointer" }}>
                      Forgot password?
                    </Text>
                  </Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  isLoading={loading}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
