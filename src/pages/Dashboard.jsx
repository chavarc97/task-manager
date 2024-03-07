import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import Tasks from "../components/Tasks";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  // useEffect hook to check if the user is logged in
  useEffect(() => {
    if (!user) {
      navigate("/login"); // if the user is not logged in, redirect to the login page
    }
  }, [user, navigate]);

  return (
    <>
      <Box my={10} mx={40} borderBottom={'.5px solid'}>
      <Text fontWeight={"Bold"} fontSize={"xx-large"}>
        Dashboard
      </Text>
      </Box>

      <Flex
        w={"full"}
        h={"full"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={5}
        mt={3}
        
      >
        <Flex
          borderRadius={10}
          
          bgGradient="linear(to-t, grey , whiteAlpha.500)"
          w={"300px"}
          h={'full'}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack p={8} w={"full"} h={"full"}>
            <Text
              borderBottom={"1px solid"}
              color={"whiteAlpha.900"}
              fontWeight={"bold"}
              fontSize={25}
            >
              Welcome {user?.name}
            </Text>
            <Flex
              justifyContent={"space-evenly"}
              fontWeight={"medium"}
              textColor={"whiteAlpha.900"}
              fontSize={15}
              w={"full"}
              h={"full"}
              mt={5}
            >
              <Text mr={"auto"} fontWeight={"Bold"}>
                Completed
              </Text>
              <Text color={"whiteAlpha.700"}>0</Text>
            </Flex>
            <Flex
              justifyContent={"space-evenly"}
              fontWeight={"medium"}
              textColor={"whiteAlpha.900"}
              fontSize={15}
              w={"full"}
              h={"full"}
            >
              <Text mr={"auto"} fontWeight={"Bold"}>
                To Complete
              </Text>
              <Text color={"whiteAlpha.700"}>0</Text>
            </Flex>
          </VStack>
        </Flex>
        <Flex w={"full"} h={'full'} mb={'auto'}>
          <Tasks/>
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
