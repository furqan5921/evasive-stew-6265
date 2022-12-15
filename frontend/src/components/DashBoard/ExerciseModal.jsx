import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Text,
  } from "@chakra-ui/react";
  import ModalTable from "./ModalTable";
  
  const data = [
    {
      desc: "banana",
      source: "NCCDB",
    },
    {
      desc: "tomato",
      source: "NCCDB",
    },
    {
      desc: "Alive",
      source: "NCCDB",
    },
    {
      desc: "Avacado",
      source: "NCCDB",
    },
    {
      desc: "Walnuts",
      source: "NCCDB",
    },
    {
      desc: "Tap water",
      source: "NCCDB",
    },
    {
      desc: "Blue berries",
      source: "NCCDB",
    },
  
    {
      desc: "Strawberies",
      source: "NCCDB",
    },
    {
      desc: "Brocoli",
      source: "NCCDB",
    },
    {
      desc: "Butter",
      source: "NCCDB",
    },
    {
      desc: "Orange",
      source: "NCCDB",
    },
  ];
  
  export function ExerciseModal({ isModalVisible, setIsModalVisible }) {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const onClose = () => {
      setIsModalVisible(false);
    };
    return (
      <>
        {/*<Button onClick={onOpen}>Open Modal</Button>*/}
  
        <Modal isOpen={isModalVisible} onClose={onClose} size="4xl"  >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Exercise</ModalHeader>
            <ModalCloseButton />
            <ModalBody w={"100%"} fontSize='md' >
              <Tabs size='lg'>
                <TabList>
                  {/* <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Search</Tab> */}
                  <Tab _selected={{ color: 'teal.500', borderBottomColor:'red'  }}  >Most Recent</Tab>
                  <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Browse All</Tab>
                </TabList>
  
                <TabPanels>
                  <TabPanel>
                    <Box>
                        <Text as='b'>No Recent Activites</Text>
                        <Text w='60%' >Try searching, browsing or
adding a Custom Exercise.</Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <ModalTable data={data} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
  