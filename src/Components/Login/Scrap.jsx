"use client";

import { useEffect, useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import Select from "react-select";
import { saveForm1Data, saveForm2Data } from "./api";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

// Options for Scrap Weight
const scrapWeightOptions = [
  { value: "1-10 kg", label: "5 kg" },
  { value: "10-20 kg", label: "10-20 kg" },
  { value: "20-40 kg", label: "20-40 kg" },
  { value: "40+ kg", label: "40+ kg" },
  // Add more options as needed
];

// Options for Scrap Type
const scrapTypeOptions = [
  { value: "metal", label: "Metal" },
  { value: "plastic", label: "Plastic" },
  { value: "paper", label: "Paper" },
  { value: "glass", label: "Glass" },
  // Add more options as needed
];

const Form1 = ({ setFormData }) => {
  const [scrapWeight, setScrapWeight] = useState(null);
  const [scrapType, setScrapType] = useState([]);
  const [scrapItems, setScrapItems] = useState([]);

  // Handle Scrap Weight Change
  const handleScrapWeightChange = (selectedOption) => {
    setScrapWeight(selectedOption);
    setFormData((prevData) => ({ ...prevData, scrapWeight: selectedOption }));
  };

  useEffect(() => {
    const fetchScrapRates = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/scrap-types`
        ); // Replace with your API endpoint
        const data = await response.json();

        if (data && data.length > 0) {
          let val = data.map((ele) => {
            return { value: ele._id, label: ele.scrapType };
          });
          setScrapItems(val);
        } else {
          setScrapItems([]);
        }
      } catch (error) {
        console.error("@@Error fetching scrap rates:", error);
        setScrapItems([]); // Fallback to default data on error
      }
    };

    fetchScrapRates();
  }, []);

  // Handle Scrap Type Change
  const handleScrapTypeChange = (selectedOptions) => {
    setScrapType(selectedOptions);
    setFormData((prevData) => ({ ...prevData, scrapType: selectedOptions }));
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Scrap Details
      </Heading>
      <Flex direction="row" gap="2rem" align="center" p={4}>
        <FormControl width="full" maxWidth="md">
          <FormLabel htmlFor="scrap-weight" fontWeight={"normal"}>
            Scrap Weight
          </FormLabel>
          <Select
            id="scrap-weight"
            options={scrapWeightOptions}
            value={scrapWeight}
            onChange={handleScrapWeightChange}
            placeholder="Select weight"
            isClearable
            isSearchable
          />
        </FormControl>
        <FormControl width="full" maxWidth="md">
          <FormLabel htmlFor="scrap-type" fontWeight={"normal"}>
            Scrap Type
          </FormLabel>
          <Select
            id="scrap-type"
            options={scrapItems}
            value={scrapType}
            onChange={handleScrapTypeChange}
            isMulti
            placeholder="Select types"
            isClearable
            isSearchable
          />
        </FormControl>
      </Flex>
    </>
  );
};

const Form2 = ({ setFormData, errors, formData }) => {
  const handleDateChange = (name, date) => {
    setFormData((prevData) => ({ ...prevData, [name]: date }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Address
      </Heading>
      <Flex gap={"2rem"}>
        <FormControl isInvalid={errors.mobileNumber}>
          <FormLabel htmlFor="mobileNumber">Phone Number</FormLabel>
          <Input
            type="number"
            name="mobileNumber"
            id="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.mobileNumber}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.pinCode}>
          <FormLabel htmlFor="pinCode">ZIP / Postal</FormLabel>
          <Input
            type="text"
            name="pinCode"
            id="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.pinCode}</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex gap={"2rem"}>
        <FormControl isInvalid={errors.city}>
          <FormLabel htmlFor="city">City</FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.city}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.state}>
          <FormLabel htmlFor="state">State</FormLabel>
          <Input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.state}</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex gap={"2rem"}>
        <FormControl isInvalid={errors.dateToday}>
          <FormLabel htmlFor="dateToday">Date</FormLabel>
          <Input
            type="date"
            name="dateToday"
            id="dateToday"
            value={formData.dateToday}
            onChange={(e) => handleDateChange("dateToday", e.target.value)}
          />
          <FormErrorMessage>{errors.dateToday}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.landmark}>
          <FormLabel htmlFor="landmark">Landmark</FormLabel>
          <Input
            type="text"
            name="landmark"
            id="landmark"
            value={formData.landmark}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.landmark}</FormErrorMessage>
        </FormControl>
      </Flex>
      <FormControl isInvalid={errors.description}>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <FormErrorMessage>{errors.description}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.streetAddress}>
        <FormLabel htmlFor="streetAddress"> Address</FormLabel>
        <Input
          type="text"
          name="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
        />
        <FormErrorMessage>{errors.streetAddress}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default function Multistep() {
  const Navigate = useNavigate();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(70);
  const [form1Data, setForm1Data] = useState({});
  const [form2Data, setForm2Data] = useState({});
  const [errors, setErrors] = useState({});
  console.log("@@form2Data", form1Data);
  const validate = () => {
    const newErrors = {};
    if (!form2Data.mobileNumber)
      newErrors.mobileNumber = "Phone Number is required.";
    if (!form2Data.pinCode) newErrors.pinCode = "ZIP / Postal is required.";
    if (!form2Data.city) newErrors.city = "City is required.";
    if (!form2Data.state) newErrors.state = "State is required.";
    if (!form2Data.streetAddress)
      newErrors.streetAddress = "Address is required.";
    if (!form2Data.dateToday || isNaN(new Date(form2Data.dateToday))) {
      newErrors.dateToday = "Please enter a valid date.";
    }
    if (!form2Data.landmark) newErrors.landmark = "Landmark is required.";
    if (!form2Data.description)
      newErrors.description = "Description is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async () => {
    console.log("@@form1data", form1Data);
    if (validate()) {
      const orderData = {
        userId: user._id,
        username: user.username,
        scrapWeight: form1Data.scrapWeight.value,
        scrapTypes: form1Data.scrapType.map((type) => type.value),
        status: "PENDING",
        mobileNumber: form2Data.mobileNumber,
        description: form2Data.description,
        pickupDate: form2Data.dateToday,
        address: {
          houseNo: form2Data.streetAddress,
          street: form2Data.streetAddress,
          city: form2Data.city,
          state: form2Data.state,
          pincode: form2Data.pinCode,
        },
      };

      console.log("@@order data", orderData);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.authToken}`,
            },
            body: JSON.stringify(orderData),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        toast({
          title: "Data saved.",
          description: "Your data has been saved successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        Navigate("/scrapcard");
      } catch (error) {
        toast({
          title: "Error.",
          description: "There was an error saving your data.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    }
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated />
        {step === 1 ? (
          <Form1 setFormData={setForm1Data} />
        ) : (
          <Form2
            setFormData={setForm2Data}
            validate={validate}
            errors={errors}
            formData={form2Data}
          />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              {step == 1 && (
                <Button
                  w="7rem"
                  isDisabled={
                    step == 1 &&
                    !(form1Data.scrapWeight && form1Data?.scrapType?.length)
                  }
                  onClick={() => {
                    if (step == 2) {
                    }
                    setStep(step + 1);
                    if (step === 3) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 33.33);
                    }
                  }}
                  colorScheme="teal"
                  variant="outline"
                >
                  Next
                </Button>
              )}
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
