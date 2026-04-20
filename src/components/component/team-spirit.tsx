import Image from "next/image";
import Link from "next/link";
import team from "../../../public/Life At Delta/image 112TeamSpirit.png"

export function TeamSpirit() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side - Order 2 on mobile to keep text first, or keep standard order? Standard is usually Image -> Text or alternating.
            Let's keep Image -> Text as per original, but make it nice.
        */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group order-2 md:order-1">
          <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <Image
            src={team}
            width={800}
            height={600}
            alt="Delta Team Spirit"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Team Spirit
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              We believe in the power of teamwork. Regular team building activities and events strengthen our bonds and enhance collaboration, ensuring a supportive and enjoyable work environment where every voice is heard.
            </p>
            <p>
              Whether it's a hackathon, a festive celebration, or a simple Friday bonding session, we ensure that work at Delta is not just about deadlines, but about people.
            </p>
          </div>
          <div className="pt-4">
            <Link href="/company/careers">
              <button className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-700 disabled:pointer-events-none disabled:opacity-50">
                Join Our Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
