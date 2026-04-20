import { JSX, SVGProps } from "react"
import { Trophy } from "lucide-react"
import { IconLoadBalancer } from "@tabler/icons-react"

export function EmployeeBenifit() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Benefits & Perks
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We take care of our team so they can focus on what they do best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300 p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
              <HospitalIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Health Insurance</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Comprehensive health coverage to keep you and your loved ones safe.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 grid gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Medical Coverage</li>
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Dental & Vision</li>
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Prescriptions</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300 p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
              <IconLoadBalancer className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Work Life Balance</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Flexible schedules and remote options to respect your personal time.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 grid gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Flexible Hours</li>
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Paid Time Off</li>
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Remote Options</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300 p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recognition</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              We celebrate milestones and reward exceptional performance.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 grid gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Performance Bonus</li>
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Team Events</li>
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Awards</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300 p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
              <LogInIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Development</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Continuous learning opportunities to help you advance your career.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 grid gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Mentorship</li>
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Workshops</li>
              <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-teal-500" /> Certifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}



function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}



function HospitalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  )
}


function LogInIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}




