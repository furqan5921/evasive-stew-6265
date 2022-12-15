import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "./goldPlan.module.css";
import data from "./priceData.json";

const Enterprise = () => {
  const handleOpen = () => {};
  console.log(data.priceData[0].title);

  return (
    <Box className={styles.bgImage}>
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <Box>
          <Image src="https://cdn1.cronometer.com/brand/logos/enterprise-logo.svg" />
          <br />
          <Text>For hospitals, universities and research teams</Text>
          <br />
          <UnorderedList>
            <ListItem>All Cronometer Pro features</ListItem>
            <ListItem>HIPAA compliance</ListItem>
            <ListItem>Risk assessment and compliance review</ListItem>
            <ListItem>MSA and yearly invoicing</ListItem>
            <ListItem>Staff training</ListItem>
            <ListItem>API access</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text>Custom</Text>
          <Button _hover={"none"} bg="#44d07b" color={"white"}>
            CONTACT US
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Enterprise;
