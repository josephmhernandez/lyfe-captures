import { Table } from "flowbite-react";
const WebTableAnalysis = () => {
  return (
    <Table striped className="sm:text-lg md:text-xl">
      {/* disable auto caps  */}
      <Table.Head className="sm:text-lg md:text-xl uppercase">
        <Table.HeadCell>{/* <span>Edit</span> */}</Table.HeadCell>
        <Table.HeadCell>Map Your Memory</Table.HeadCell>
        <Table.HeadCell>Other Map & Print</Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y">
        <Table.Row>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Free Digital Print
          </Table.Cell>
          <Table.Cell>✅</Table.Cell>
          <Table.Cell>❌</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Pricing (24" 36" Acrylic)
          </Table.Cell>
          <Table.Cell>$249</Table.Cell>
          <Table.Cell>
            $399 (Lowest custom printing service we can find)
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Customization
          </Table.Cell>
          <Table.Cell>100% Customizable*</Table.Cell>
          <Table.Cell>Tools available</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Free Shipping
          </Table.Cell>
          <Table.Cell>Free Continental U.S.</Table.Cell>
          <Table.Cell>Free</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Quality Material
          </Table.Cell>
          <Table.Cell>Acrylic</Table.Cell>
          <Table.Cell>Paper</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            High Definition
          </Table.Cell>
          <Table.Cell>300 DPI</Table.Cell>
          <Table.Cell>Not listed</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Hanging Kit
          </Table.Cell>
          <Table.Cell>Free</Table.Cell>
          <Table.Cell>Additional Cost</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default WebTableAnalysis;
