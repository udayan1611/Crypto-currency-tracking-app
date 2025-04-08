// import { Box, Image, Text } from "@chakra-ui/react";
// import React from "react";
// import btcSrc from "../assets/btc.png";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
//       <motion.div
//         style={{
//           height: "80vh",
//         }}
//         animate={{
//           translateY: "20px",
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       >
//         <Image
//           w={"full"}
//           h={"full"}
//           objectFit={"contain"}
//           src={btcSrc}
//           // filter={"grayscale(1)"}
//         />
//       </motion.div>

//       <Text
//         fontSize={"6xl"}
//         textAlign={"center"}
//         fontWeight={"thin"}
//         color={"whiteAlpha.700"}
//         mt={"-20"}
//       >
//         FinBuzz
//       </Text>
//     </Box>
//   );
// };

// export default Home;

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../assets/bg.png";

const Home = () => {
  return (
    <Box
      position="relative"
      w="full"
      h="85vh"
      backgroundImage={`url(${bg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgColor="blackAlpha.900"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // Black film tint (50% opacity)
        bg: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // Gradient fade at top and bottom for smooth blend
        bgGradient:
          "linear(to-b, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.9) 100%)",
        zIndex: 2,
      }}
    >
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize="8xl"
        fontWeight="extrabold"
        color="white"
        zIndex={3}
        transition="all 0.3s"
        _hover={{
          transform: "translate(-50%, -50%) scale(1.1)",
          color: "gold",
          textShadow: "2px 2px 10px black",
        }}
        cursor="pointer"
      >
        FinBuzz
      </Text>
    </Box>
  );
};

export default Home;
