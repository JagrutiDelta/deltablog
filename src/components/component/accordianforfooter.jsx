
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { IconLocation } from "@tabler/icons-react";

export function Accordianforfooter() {
  return (
    <Accordion
      className="w-full max-w-md"
      collapsible
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="border-b-gray-200 dark:border-b-neutral-800 border-b">
        <AccordionTrigger className="flex items-start justify-between gap-4 px-0 py-4 font-medium transition-colors hover:text-teal-400 text-gray-900 dark:text-white hover:no-underline">
          Ahmedabad
        </AccordionTrigger>
        <AccordionContent className="px-0 py-4 text-gray-600 dark:text-gray-400">
          <div className="flex items-start text-gray-700 dark:text-neutral-300 gap-3">
            <IconLocation className="w-5 h-5 mt-1 shrink-0 text-teal-500" />
            <span>
              Delta Infosoft Pvt. Ltd.<br />
              A-701, Safal Profitaire, <br />
              Opp. Ramada Hotel, Corporate Road, Satellite, <br />
              Ahmedabad Gujarat - 380015
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b-gray-200 dark:border-b-neutral-800 border-b">
        <AccordionTrigger className="flex items-center justify-between gap-4 px-0 py-4 font-medium transition-colors hover:text-teal-400 text-gray-900 dark:text-white hover:no-underline">
          Palanpur
        </AccordionTrigger>
        <AccordionContent className="px-0 py-4 text-gray-600 dark:text-gray-400">
          <div className="flex items-start text-gray-700 dark:text-neutral-300 gap-3">
            <IconLocation className="w-5 h-5 mt-1 shrink-0 text-teal-500" />
            <span>
              206-Valkeshwar Complex, Cozy Road,<br />
              Behind Gitanjali Complex, Palanpur,<br />
              Gujarat 385001
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-b-transparent border-b">
        <AccordionTrigger className="flex items-center justify-between gap-4 px-0 py-4 font-medium transition-colors hover:text-teal-400 text-gray-900 dark:text-white hover:no-underline">
          Jaipur
        </AccordionTrigger>
        <AccordionContent className="px-0 py-4 text-gray-600 dark:text-gray-400">
          <div className="flex items-start text-gray-700 dark:text-neutral-300 gap-3">
            <IconLocation className="w-5 h-5 mt-1 shrink-0 text-teal-500" />
            <span>
              3rd Floor, Mahima Trinity Mall,<br />
              Swej Farm Rd, Radha Vihar, Shiva Colony, <br />
              Govindpuri, Jaipur, Rajasthan 302019
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
