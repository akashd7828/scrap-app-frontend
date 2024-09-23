"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const toast = useToast();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const user = localStorage.getItem("user");

  useLayoutEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/otp/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobileNumber: formData.mobileNumber }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "OTP sent!",
          description: "Please check your mobile for the OTP.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        setStep(2); // Move to OTP verification step
      } else {
        toast({
          title: "Failed to send OTP!",
          description: data.message || "Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast({
        title: "An error occurred!",
        description: "Unable to send OTP. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }

    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match!",
        description: "Please ensure both passwords are the same.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/otp/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobileNumber: formData.mobileNumber,
            otp: formData.otp,
            newPassword: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Password reset successful!",
          description: "You can now log in with your new password.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        // Redirect to login page
        window.location.href = "/login";
      } else {
        toast({
          title: "OTP verification failed!",
          description: data.message || "Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast({
        title: "An error occurred!",
        description: "Unable to verify OTP. Please try again later.",
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
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      px={{ base: "4", md: "8" }}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={{ base: "xs", md: "md", lg: "lg" }}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>
            Forgot Password
          </Heading>
          <Text fontSize={{ base: "sm", md: "lg" }} color={"gray.600"}>
            Enter your mobile number to receive an OTP.
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={step === 1 ? handleRequestOtp : handleVerifyOtp}>
            <Stack spacing={4}>
              {step === 1 && (
                <FormControl id="mobileNumber" isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    _focus={{ boxShadow: "outline", borderColor: "blue.400" }}
                  />
                </FormControl>
              )}
              {step === 2 && (
                <>
                  <FormControl id="otp" isRequired>
                    <FormLabel>OTP</FormLabel>
                    <Input
                      type="text"
                      value={formData.otp}
                      onChange={handleInputChange}
                      _focus={{ boxShadow: "outline", borderColor: "blue.400" }}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>New Password</FormLabel>
                    <Input
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      _focus={{ boxShadow: "outline", borderColor: "blue.400" }}
                    />
                  </FormControl>
                  <FormControl id="confirmPassword" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      _focus={{ boxShadow: "outline", borderColor: "blue.400" }}
                    />
                  </FormControl>
                </>
              )}
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
                type="submit"
                isLoading={loading}
              >
                {step === 1 ? "Send OTP" : "Verify OTP"}
              </Button>
              <Stack align={"center"}>
                <Link to={"/login"} passHref>
                  <Text color={"blue.400"} _hover={{ cursor: "pointer" }}>
                    Back to login
                  </Text>
                </Link>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
