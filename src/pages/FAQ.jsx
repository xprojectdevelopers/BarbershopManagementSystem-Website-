import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const FaqPage = () => {
  useEffect(() => {
    document.title = "FAQ | Molave Street Barbers";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "Find answers to common questions about Molave Barbershop’s services, hours, and appointments.");
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute("content", "FAQ, barbershop questions, grooming info, Molave");
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4 mt-[-70px]">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl text-center mb-4" style={{fontFamily: 'satoshi-bold'}}>Frequently Asked Questions</h1>
        <p className="text-sm md:text-base text-center mb-12" style={{fontFamily: 'satoshi-medium'}}>Find answers to your questions about our services and policies below.</p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          
          <AccordionItem value="item-1">
            <AccordionTrigger>How can I book an appointment?</AccordionTrigger>
            <AccordionContent>
              You can book an appointment through our online booking system or by calling us directly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Do you accommodate walk-in clients?</AccordionTrigger>
            <AccordionContent>
              Yes, we welcome walk-ins! However, to ensure you get served promptly, we recommend checking our peak hours. Walk-in availability may vary.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What are the accepted payment methods?</AccordionTrigger>
            <AccordionContent>
              We accept various payment methods, including cash and e-wallet options. You can pay conveniently through GCash or Maya.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Do you offer home service?</AccordionTrigger>
            <AccordionContent>
              Yes, we do! You can book a home service by contacting us directly, sending us an email, or visiting our official Facebook page for more details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Do you sell hair products?</AccordionTrigger>
            <AccordionContent>
              Yes! We offer a variety of hair products over the counter, including pomades, basic hair care tools, sprays, and more. Just visit our shop to check out full selection. 
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FaqPage