import "./App.css";
import { Scene } from "./Scene";
import { TextureEditorProvider } from "./TextureEditorProvider";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { ImageSide } from "./ImageSide";

function App() {
  return (
    <ChakraProvider>
      <TextureEditorProvider>
        <Flex h="100vh">
          <Box w="700px">
            <Scene />
          </Box>

          <Box flex="1">
            <ImageSide />
          </Box>
        </Flex>
      </TextureEditorProvider>
    </ChakraProvider>
  );
}

export default App;
