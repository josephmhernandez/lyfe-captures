import Layout from "../../components/layout/Layout";
import { Accordion, AccordionItem } from "@paljs/ui";
const Faqs = () => {
  return (
    <Accordion>
      <AccordionItem uniqueKey={1} title="head 1">
        Hello 1Hello 1Hello 1Hello 1
      </AccordionItem>
      <AccordionItem uniqueKey={2} title="head 2">
        Hello 2Hello 2Hello 2Hello 2
      </AccordionItem>
      <AccordionItem uniqueKey={3} title="head 3">
        <p> AYOOOOO</p>
      </AccordionItem>
    </Accordion>
  );
};
export default Faqs;
