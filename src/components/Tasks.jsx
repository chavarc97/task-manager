import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
} from "@chakra-ui/react";

const Tasks = () => {
  return (
    <Flex>
        <Table variant="unstyle" >
          <Thead color={'white'} borderBottom={'.5px solid'}>
            <Tr>
              <Th>Task</Th>
              <Th>Description</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody >
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          </Tbody>
        </Table>
    </Flex>
  );
};
export default Tasks;
