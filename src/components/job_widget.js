import React from "react";
import { Flex, Box, Card, Image, Heading, Text } from "rebass";

function jobWidget(props) {
  return (
    <Box px={2} py={2} width={1 / 2}>
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
        }}
      >
        <Heading>{props.title}</Heading>
        <Heading>{props.body}</Heading>       
      </Card>
    </Box>
  );
}

export default jobWidget;
