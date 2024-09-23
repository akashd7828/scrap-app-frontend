"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    mobileNumber: "", // Adjust field name for backend compatibility
    email: "",
    password: "",
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});
  const user = localStorage.getItem("user");
  useLayoutEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  // Handle form input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.mobileNumber || formData.mobileNumber.length !== 10)
      newErrors.mobileNumber = "Valid mobile number is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      for (let error in newErrors) {
        toast.error(newErrors[error]);
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form
    if (validate()) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/users/register`,
          {
            // Adjusted endpoint
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          toast.success("User registered successfully!");

          // Clear form data
          setFormData({
            firstName: "",
            lastName: "",
            username: "",
            mobileNumber: "",
            email: "",
            password: "",
          });
          navigate("/login");
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || "Failed to register user");
        }
      } catch (error) {
        toast.error("Error submitting form");
        console.error("Error:", error);
      }
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
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
              <HStack>
                <Box>
                  <FormControl
                    id="firstName"
                    isRequired
                    isInvalid={errors.firstName}
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <HStack>
                <Box>
                  <FormControl
                    id="username"
                    isRequired
                    isInvalid={errors.username}
                  >
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl
                    id="mobileNumber"
                    isInvalid={errors.mobileNumber}
                  >
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="number"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="email" isRequired isInvalid={errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="password" isRequired isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
      <ToastContainer />
    </Flex>
  );
}
