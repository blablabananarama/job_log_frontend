import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flex, Box, Card, Image, Heading, Text } from "rebass";
import ThemeProvider from "./providers/theme_provider";
import { theme } from "./assets/theme"



function App() {
  fetch('http://127.0.0.1:8088/')
    .then(res => console.log(res.response))
    //.catch(err => console.log(err))


  return (
    <ThemeProvider theme={theme}>
    <Flex flexWrap="wrap" mx={-2}>
      <Box px={2} py={2} width={1 / 2}>
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
          }}
        >
          <Heading>Card</Heading>
        </Card>
      </Box>
      <Box px={2} py={2} width={1 / 2}>
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
          }}
        >
          <Heading>Card</Heading>
        </Card>
      </Box>
    </Flex>
    </ThemeProvider>
  );
}

export default App;
