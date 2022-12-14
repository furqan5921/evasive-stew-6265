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
    Text,
    VStack,
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
  
  export function BiometricModal({ isModalVisible, setIsModalVisible }) {
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
            <ModalHeader>Add Biometric</ModalHeader>
            <ModalCloseButton />
            <ModalBody w={"100%"} fontSize={{base:'sm',md:"md"}} >
              <Tabs size={{base:'sm',md:"md"}}>
                <TabList display='flex' flexWrap='wrap'>
                  {/* <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Search</Tab> */}
                  <Tab _selected={{ color: 'teal.500', borderBottomColor:'red'  }}  >Most Recent</Tab>
                  <Tab _selected={{ color: 'teal.500', borderBottomColor:'red' }}  >Browse All</Tab>
                </TabList >
  
                <TabPanels>
                  <TabPanel>
                    <VStack >
                        <Text as='b'>No Recent</Text>
                        <Text w='60%' >Try searching, browsing or
adding a Custom Exercise.</Text>
                    </VStack >
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
  