
// import { CardContent, Card } from "@/components/ui/card"
import { MagicCard, MagicContainer } from "../magicui/magic-card"

export function GridStrucutre() {
  return (
    <div className="grid grid-cols-1 bg-blend-darken sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 p-4 md:p-6">

      <MagicContainer className={
        "flex h-[180px] w-full flex-col gap-4 lg:h-[100px] lg:flex-row"
      }>

        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  ">
          <p className="z-10  text-2xl font-medium text-gray-800 dark:text-gray-200">
            Production and Shop Floor Management
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_320%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
      <MagicContainer className={
        "flex h-[180px] w-full flex-col gap-4 lg:h-[100px] lg:flex-row"
      }>

        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  ">
          <p className="z-10  text-2xl font-medium text-gray-800 dark:text-gray-200">
            Master Production Schedule
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_320%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
      <MagicContainer className={
        "flex h-[180px] w-full flex-col gap-4 lg:h-[100px] lg:flex-row"
      }>

        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  ">
          <p className="z-10  text-2xl font-medium text-gray-800 dark:text-gray-200">
            Material Requirement Planning
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_320%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
      <MagicContainer className={
        "flex h-[180px] w-full flex-col gap-4 lg:h-[100px] lg:flex-row"
      }>

        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  ">
          <p className="z-10  text-2xl font-medium text-gray-800 dark:text-gray-200">
            Production Order
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_320%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
      <MagicContainer className={
        "flex h-[180px] w-full flex-col gap-4 lg:h-[100px] lg:flex-row"
      }>

        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  ">
          <p className="z-10  text-2xl font-medium text-gray-800 dark:text-gray-200">
            Stores & Inventory Management
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_320%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
      <MagicContainer className={
        "flex h-[180px] w-full flex-col gap-4 lg:h-[100px] lg:flex-row"
      }>

        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  ">
          <p className="z-10  text-2xl font-medium text-gray-800 dark:text-gray-200">
            Supplier & Purchase Management
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_320%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
      <MagicContainer className={
        "flex h-[180px] w-full flex-col gap-4 lg:h-[100px] lg:flex-row"
      }>

        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  ">
          <p className="z-10  text-2xl font-medium text-gray-800 dark:text-gray-200">
            Customer & Order Management
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_320%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
      <MagicContainer className={
        "flex h-[180px] w-full flex-col gap-4 lg:h-[100px] lg:flex-row"
      }>

        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  ">
          <p className="z-10  text-2xl font-medium text-gray-800 dark:text-gray-200">
            Plant Maintenance
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_320%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
      <MagicContainer className={
        "flex h-[180px] w-full flex-col gap-4 lg:h-[100px] lg:flex-row"
      }>

        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  ">
          <p className="z-10  text-2xl font-medium text-gray-800 dark:text-gray-200">
            Accounts & Finance Management
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_320%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    </div>
  )
}
