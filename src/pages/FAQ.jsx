import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Helmet } from 'react-helmet-async'

const FaqPage = () => {
  return (
    <div>
      <Helmet>
        <title>Frequently Asked Questions | Molave Street Barbers</title>
        <meta name="description" content="Find answers to common questions about Molave Barbershop’s services, pricing, appointments, and customer support."/>
        <meta name="keywords" content="molave barbershop faq, barbershop questions, haircut pricing, booking appointments, grooming info"/>
      </Helmet>

      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4 mt-[-70px]">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl md:text-4xl text-center mb-4" style={{fontFamily: 'satoshi-bold'}}>Frequently Asked Questions</h1>
          <p className="text-sm md:text-base text-center mb-12" style={{fontFamily: 'satoshi-medium'}}>Find answers to your questions about our services and policies below.</p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            
            <AccordionItem value="item-1">
              <AccordionTrigger>How to book?</AccordionTrigger>
              <AccordionContent>
                Booking an appointment is easy! You can use our online booking system or call us directly. 
                We recommend booking in advance to secure your preferred time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Rescheduling policy?</AccordionTrigger>
              <AccordionContent>
                If you need to reschedule, please notify us at least 24 hours in advance. 
                This allows us to accommodate other clients. Late cancellations may incur a fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Walk-in acceptance?</AccordionTrigger>
              <AccordionContent>
                Yes, we welcome walk-ins! However, to ensure you get served promptly, 
                we recommend checking our peak hours. Walk-in availability may vary.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Payment methods accepted?</AccordionTrigger>
              <AccordionContent>
                We accept various payment methods, including cash, credit, and debit cards. 
                For your convenience, we also offer mobile payment options. 
                Please inquire at the front desk for details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Service guarantee?</AccordionTrigger>
              <AccordionContent>
                We strive for excellence in every service we provide. 
                If you're not satisfied with your haircut, please let us know within 7 days. 
                We will work with you to make it right.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FaqPage