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
            className='border rounded-[0.5rem] px-5 mb-[15px] py-[6px] border-primary-border card-shadow'
          >
            <AccordionTrigger className='text-sm font-bold hover:no-underline py-0'>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default FaqsItem;
