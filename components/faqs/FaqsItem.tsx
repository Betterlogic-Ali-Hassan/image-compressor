import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constant/faqs";
const FaqsItem = () => {
  return (
    <>
      <Accordion type='single' collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className='border rounded-[0.5rem] px-5 py-0 border-border mb-4 '
          >
            <AccordionTrigger className='hover:no-underline !my-0 py-[17px] '>
              <h6 className=' font-bold  text-base'> {faq.question}</h6>
            </AccordionTrigger>
            <AccordionContent className='text-[15px]'>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default FaqsItem;
