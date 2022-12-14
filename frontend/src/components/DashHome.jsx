import {
  Box,
  Button,
  Flex,
  Progress,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../redux/datareducer/action";
import { getuserdata } from "../redux/userdatareducer/action";
import ListStack from "./DashBoard/ListStack";
import { MobileNav } from "./Siderbar";
// Quick Add to Diary
function DashHome() {
  const dispatch = useDispatch();
  let [model, setmodel] = useState(false)
  const { loading, datas } = useSelector(el => el.data)
  const {userdata,totalprotein,totalcarbs,totalfat,totalcunsumed} =useSelector(e=>e.userdata)
  const [total, settotal] = useState({
      totalcunsumed:0,
      totalprotein:0,
      totalcarbs:0,
      totalfat:0
  })

  useEffect(()=>{
      dispatch(getdata())
      dispatch(getuserdata())
      
  },[])
  // useEffect(()=>{
  //     calculatedata()
  // },[])
  console.log(totalprotein,totalcarbs,totalfat,totalcunsumed)
  function calculatedata(){
      let totalcunsumed=userdata.length!=0?userdata.reduce((a,b)=>(Number(a.energy)+Number(b.energy))):0
      let totalprotein=userdata.length!=0?userdata.reduce((a,b)=>{
          return (a.protein.split("-")[0]+b.protein.split("-")[0])
      }):1
      let totalcarbs=userdata.length!=0?userdata.reduce((a,b)=>{
          return (a.carbs.split("-")[0]+b.carbs.split("-")[0])
      }):0
      let totalfat=userdata.length!=0?userdata.reduce((a,b)=>{
          return (a.fat.split("-")[0]+b.fat.split("-")[0])
      }):0
      settotal({totalcunsumed,totalprotein,totalcarbs,totalfat})
  }

  console.log(datas,loading,userdata)
  if (loading==true) {
      return <h1>Loading...</h1>
  }

  return (
    <Box w={["100%", "100%", "80%"]} float={"right"} h={"50rem"}>
      <MobileNav />
      <Heading fontSize={{base:'15px',md:'18px',lg:'22px'}}>Your Dashboard</Heading>
      <ListStack    w={"85%"}     m={10}
        boxShadow={"lg"}
         title="Quick Add to Diary"/>
      <Flex gap={{base:10,md:10}} m={{base:5,md:10,lg:20}} flexWrap={{base:'wrap',md:'nowrap'}} justifyContent="center" alignItems={"center"}>
        <Box
          bgColor="white"
          textAlign={"center"}
          p={"2rem"}
          pt="10rem"
          h={"30rem"}
          fontSize={{base:'10px',md:'15px',lg:'18px'}}
          w={{md:'80%',lg:"50%"}}
        >
          <Box h='40%'>

          </Box>
          <Heading>Cronometer <Text as='span' color='#FFD700' >Gold</Text></Heading>
          <Text>Get Gold for an ad-free experience.</Text>
          <Button colorScheme="teal" size={{base:'sm',md:'md',lg:"lg"}}>
            {" "}
            SEE ALL FEATURES
          </Button>
        </Box>
        <Stack bgColor="white" w="50%"  spacing={10} p={5} textAlign={"left"}>
          <Box><Text as="b" align={"left"}>
            {" "}
            Fasting
          </Text>
          <Text color="grey" align={"center"} m={4}>
            {" "}
            No Currently Fasting
          </Text>
          </Box>
          <Box>
          <Text color="grey" align={"left"} m={2}>
            {" "}
            No Fast Schelduled
          </Text>
          <Progress
            colorScheme="teal"
            h="3vh"
            w="80%"
            m="auto"
            borderRadius="1rem"
            size="lg"
            value={0}
          />
          </Box>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
          <Button m="2rem"  colorScheme="teal" variant="outline">
            NEW FAST
          </Button>
          </Box>
          <Box
            border="1px solid grey"
            p={3}
            m={2}
            textAlign="center"
            textColor='grey'
            fontSize={{base:'10px',md:'15px',lg:'18px'}}
            borderRadius={"1rem"}
          >
            <Text as='b' m={{base:5,md:10}} fontSize={{base:'10px',md:'15px',lg:'18px'}}> Fasting Stats</Text>
            <SimpleGrid columns={[1, null, 2]} m='auto' w='90%' spacing={{base:'5px',md:"10px"}}   textAlign={'left'} fontSize={{base:'10px',md:'15px',lg:'18px'}}>
              <Box bg="white" height="10%">
                <Text as="p">Completed Fasts :</Text>
                <Text as="p"> 0 </Text>
              </Box>
              <Box bg="white" height="10%">
                <Text as="p">Longest Fast :</Text>
                <Text as="p"> 0 Hours </Text>
              </Box>
              <Box bg="white" height="10%">
                <Text as="p">Total Time Fasting :</Text>
                <Text as="p"> 0 Hours</Text>
              </Box>
              <Box bg="white" height="10%">
                <Text as="p">7-Fast Average :</Text>
                <Text as="p"> 0 Hours</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default DashHome;
