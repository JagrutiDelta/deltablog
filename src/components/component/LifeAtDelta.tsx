import Image from "next/image";
import image from "../../../public/Life At Delta/Group 22622life at delta.png"
import ValueTree from "../../../public/Life At Delta/Group 22685valuetree.png"

export function LifeAtDelta() {
  return (
    <div className="w-full space-y-24">
      {/* Intro Grid */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              A Vibrant Workplace
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                At Delta, we believe in fostering a dynamic and inclusive work environment that empowers our employees to thrive. From our state-of-the-art facilities to our engaging team-building activities, we strive to create a space where innovation and collaboration are the norm.
              </p>
              <p>
                We cultivate a culture of inclusivity and respect. We celebrate diversity and foster an environment where every team member's contribution is valued and encouraged.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group">
            <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <Image
              src={image}
              width={800}
              height={600}
              alt="Life at Delta Team"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Values Tree Section */}
      <section className="w-full text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Growing Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our core values are the roots of our success, helping us grow and branch out into new innovations.
          </p>
        </div>
        <div className="relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900/50 p-8 md:p-12">
          <Image
            src={ValueTree}
            width={1200}
            height={1000}
            alt="Delta Values Tree"
            className="mx-auto w-full max-w-5xl md:hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>
    </div>
  )
}
