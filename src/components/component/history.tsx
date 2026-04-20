
import Timeline from "../../components/component/TimeLine"

export function History() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Our Journey
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Delta InfoSoft has been at the forefront of innovation since our founding in 2010.
              Here is a look at our milestones and our vision for the future.
            </p>
          </div>
        </div>

        <div className="w-full">
          <Timeline />
        </div>
      </div>
    </section>
  )
}

