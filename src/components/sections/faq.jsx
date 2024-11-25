import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQ() {
    const faqs = [
      {
        question: "How do I get a Referral Code?",
        answer: "You can get your referral code by connecting your wallet and visiting the referral section in your dashboard."
      },
      {
        question: "Do I get rewarded in tokens or ETH when I refer buyers?",
        answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!"
      },
      {
        question: "How do I get a Referral Code?",
        answer: "Connect your wallet to automatically generate your unique referral code."
      },
      
    ]
  
    return (
      <section className="py-20 bg-[#0A1020]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#E4B40D] mb-12">
            FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto mb-14">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none bg-[#0F172A] rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-[#1E293B] transition-colors [&[data-state=open]>div]:bg-[#1E293B]">
                    <div className="flex items-center w-full text-left py-2">
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  
  