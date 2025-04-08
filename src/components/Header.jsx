// import { Button, HStack } from "@chakra-ui/react";
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
//       <Button variant={"unstyled"} color={"white"}>
//         <Link to="/">Home</Link>
//       </Button>
//       <Button variant={"unstyled"} color={"white"}>
//         <Link to="/exchanges">Exchanges</Link>
//       </Button>
//       <Button variant={"unstyled"} color={"white"}>
//         <Link to="/coins">Coins</Link>
//       </Button>
//     </HStack>
//   );
// };

// export default Header;

import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="blackAlpha.900" boxShadow="md" px="8" py="4">
      <HStack justify="space-between" align="center">
        {/* Brand Logo / Name */}
        <Text fontSize="2xl" color="white" fontWeight="bold">
          FinBuzz
        </Text>
        {/* Navigation Buttons */}
        <HStack spacing="6">
          <Button variant="ghost" color="white" _hover={{ bg: "gray.700" }}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" color="white" _hover={{ bg: "gray.700" }}>
            <Link to="/exchanges">Exchanges</Link>
          </Button>
          <Button variant="ghost" color="white" _hover={{ bg: "gray.700" }}>
            <Link to="/coins">Coins</Link>
          </Button>
          <Button variant="ghost" color="white" _hover={{ bg: "gray.700" }}>
            <Link to="/compare">Compare</Link>
          </Button>
          <Button variant="ghost" color="white" _hover={{ bg: "gray.700" }}>
            <Link to="/stocks">Stocks</Link>
          </Button>
          {/* New Signup Button */}
          <Button variant="ghost" color="white" _hover={{ bg: "gray.700" }}>
            <Link to="/signup">Signup</Link>
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;