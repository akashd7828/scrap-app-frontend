import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Box,
  Divider,
  Icon,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  MdLocationOn,
  MdDelete,
  MdSchedule,
  MdDescription,
  MdPhone,
  MdInfoOutline,
} from "react-icons/md";
import { refreshAccessToken } from "../../Assets/refreshToken";
import { toast } from "react-toastify";

const ScrapCards = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const fetchOrders = async (authToken = "") => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/orders/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${authToken ? authToken : user.authToken}`, // Set the token in the headers
            },
          }
        );
        setOrders(response.data);
      } catch (err) {
        if (err?.status === 403) {
          await refreshAccessToken();
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId, authToken) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${user.authToken}`, // Set the token in the headers
          },
        }
      );
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (err) {
      if (err?.status === 403) {
        toast.error("Your session has expired please try action again");
        await refreshAccessToken();
      } else {
        setError(err.message);
      }
    }
  };

  const formatAddress = (address) => {
    const fullAddress = `${address.houseNo}, ${address.street}, ${address.city}, ${address.state}, ${address.pincode}`;
    return fullAddress;
  };

  const formatPickupDate = (date) => {
    const parsedDate = new Date(date);
    return isNaN(parsedDate) ? "Invalid Date" : parsedDate.toLocaleString();
  };

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3 });

  if (loading) {
    return (
      <Box textAlign="center" padding="20">
        <Text fontSize="xl">Loading orders...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" padding="20">
        <Text fontSize="xl" color="red.500">
          Error: {error}
        </Text>
      </Box>
    );
  }

  return (
    <Stack spacing="6" padding="4">
      <SimpleGrid columns={columns} spacing={6}>
        {orders.length > 0 ? (
          orders.map((order) => (
            <Card
              key={order._id}
              boxShadow="lg"
              borderRadius="md"
              overflow="hidden"
            >
              <CardHeader bg="gray.100" padding="4">
                <Heading size="md" color="teal.600">
                  Order Details
                </Heading>
              </CardHeader>
              <Divider />
              <CardBody padding="4">
                {/* Address */}
                <Box mb={4} display="flex" alignItems="center">
                  <Icon as={MdLocationOn} boxSize={6} color="blue.500" />
                  <Text ml={3} whiteSpace="normal">
                    <strong>Address:</strong> {formatAddress(order.address)}
                  </Text>
                </Box>
                {/* Scrap Types */}
                <Box mb={4} display="flex" alignItems="center">
                  <Icon as={MdDescription} boxSize={6} color="green.500" />
                  <Text ml={3}>
                    <strong>Scrap Types:</strong> {order.scrapTypes.join(", ")}
                  </Text>
                </Box>
                {/* Scrap Weight */}
                <Box mb={4} display="flex" alignItems="center">
                  <Icon as={MdDelete} boxSize={6} color="orange.500" />
                  <Text ml={3}>
                    <strong>Weight:</strong>{" "}
                    {order.scrapWeight ? order.scrapWeight : "-"}
                  </Text>
                </Box>
                {/* Pickup Date */}
                <Box mb={4} display="flex" alignItems="center">
                  <Icon as={MdSchedule} boxSize={6} color="purple.500" />
                  <Text ml={3}>
                    <strong>Pickup Date:</strong>{" "}
                    {formatPickupDate(order.pickupDate)}
                  </Text>
                </Box>
                {/* Mobile Number */}
                <Box mb={4} display="flex" alignItems="center">
                  <Icon as={MdPhone} boxSize={6} color="teal.500" />
                  <Text ml={3}>
                    <strong>Mobile Number:</strong> {order.mobileNumber}
                  </Text>
                </Box>
                {/* Description */}
                <Box mb={4} display="flex" alignItems="center">
                  <Icon as={MdInfoOutline} boxSize={6} color="cyan.500" />
                  <Text ml={3}>
                    <strong>Description:</strong> {order.description}
                  </Text>
                </Box>
                <Divider />
                {order?.status === "PENDING" && (
                  <Box display="flex" justifyContent="flex-end" mt={4}>
                    <Button
                      colorScheme="red"
                      onClick={() => handleDelete(order._id)}
                      size="sm"
                    >
                      Delete
                    </Button>
                  </Box>
                )}
              </CardBody>
            </Card>
          ))
        ) : (
          <Text fontSize="lg">No orders available.</Text>
        )}
      </SimpleGrid>
    </Stack>
  );
};

export default ScrapCards;
