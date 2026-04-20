
// import { Button } from "@/components/ui/button"
// import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer"
// import DevPO from "../../../public/Solution/DEV PO.png"
// // import DTCDashboard from "../../../public/Solution/DTC Dashboard.png"
// // import FitTOJoB from "../../../public/Solution/Fit To Job.png"
// import DMTS from "../../../public/Solution/aqualogixdmts.png"
// import Banas from "../../../public/Solution/Banasbanas.png"
// import WatermanWarranty from "../../../public/Solution/Waterman Warranty.png"
// import Image from "next/image"

// export function ProductPreview() {
//   return (
//     <div className=" h-full relative w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
//       <div className="">
//         <div className=" gap-6">
//           <Drawer>
//             <DrawerTrigger asChild>
//               <div className="group absolute -left-64 -top-4 overflow-hidden rounded-lg cursor-pointer z-10">
//                 <Image
//                   alt="Software Product"
//                   className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-110"
//                   height={200}
//                   src={DevPO}
//                   style={{
//                     aspectRatio: "280/200",
//                     objectFit: "contain",
//                   }}
//                   width={600}
//                 />

//                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <Button size="lg" variant="outline">
//                     View Details
//                   </Button>
//                 </div>
//               </div>
//             </DrawerTrigger>
//             <DrawerContent>
//               <div className="grid md:grid-cols-2 gap-8 items-start">
//                 <div className="flex justify-center">

//                   <Image
//                     alt="Software Product"
//                     className="max-w-full h-auto rounded-lg"
//                     height={300}
//                     src={DevPO}
//                     style={{
//                       aspectRatio: "400/300",
//                       objectFit: "contain",
//                     }}
//                     width={400}
//                   />
//                 </div>
//                 <div className="grid p-10 gap-4">
//                   <h2 className="text-3xl font-bold">DEV PO</h2>
//                   <p className="text-gray-500">
//                     A Dev PO module manages Purchase Orders (PO), Goods Receipt Notes (GRN), job work, and payments.
//                   </p>
//                   <div className="grid gap-2">
//                     <div className="flex items-center gap-2">

//                       <span>- Creation, management, and approval of purchase orders.</span>
//                     </div>
//                     <div className="flex items-center gap-2">

//                       <span>- Tracking and recording received goods against POs.</span>
//                     </div>
//                     <div className="flex items-center gap-2">

//                       <span>- Managing payments to vendors.</span>
//                     </div>
//                   </div>
//                   {/* <div className="flex gap-2">
//                     <Button size="lg">Try IT !!!</Button>
//                     <Button size="lg" variant="outline">
//                       Learn More
//                     </Button>
//                   </div> */}
//                 </div>
//               </div>
//             </DrawerContent>
//           </Drawer>
//           <Drawer>
//             <DrawerTrigger asChild>
//               <div className="group relative  overflow-hidden rounded-lg cursor-pointer">
//                 <Image
//                   alt="Software Product"
//                   className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-110"
//                   height={300}
//                   src={Banas}
//                   style={{
//                     aspectRatio: "1100/800",
//                     objectFit: "contain",
//                   }}
//                   width={600}
//                 />
//                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <Button size="lg" variant="outline">
//                     View Details
//                   </Button>
//                 </div>
//               </div>
//             </DrawerTrigger>
//             <DrawerContent>
//               <div className="grid md:grid-cols-2 gap-8 items-start">
//                 <div className="flex justify-center">

//                   <Image
//                     alt="Software Product"
//                     className="max-w-full h-auto rounded-lg"
//                     height={300}
//                     src={Banas}
//                     style={{
//                       aspectRatio: "400/300",
//                       objectFit: "contain",
//                     }}
//                     width={400}
//                   />
//                 </div>
//                 <div className="grid p-10 gap-4">
//                   <h2 className="text-3xl font-bold">Umang Mall Dashboard</h2>
//                   <p className="text-gray-500">
//                     It has LOB Sales Summary, Store Wise Monthly Sales, Store Wise P&L Pages, Daily Sales Report Page With Graphs and tables.
//                   </p>
//                   <div className="grid gap-2">
//                     <div className="flex items-center gap-2">

//                       <span>- Provide an overview of sales performance across different lines of business (LOBs).</span>
//                     </div>
//                     <div className="flex items-center gap-2">

//                       <span>- Display detailed sales data for each store, broken down by month.</span>
//                     </div>
//                     <div className="flex items-center gap-2">

//                       <span>- Present financial performance metrics for each store, focusing on profit and loss.</span>
//                     </div>
//                     <div className="flex items-center gap-2">

//                       <span>- Offer a comprehensive view of daily sales data with interactive graphs and tables.</span>
//                     </div>
//                   </div>
//                   {/* <div className="flex gap-2">
//                     <Button size="lg">Try IT !!!</Button>
//                     <Button size="lg" variant="outline">
//                       Learn More
//                     </Button>
//                   </div> */}
//                 </div>
//               </div>
//             </DrawerContent>
//           </Drawer>
//         </div>
//         <div className=" gap-6">
//           <Drawer>
//             <DrawerTrigger asChild>
//               <div className="group   absolute -left-64 -bottom-20 rounded-2xl overflow-hidden cursor-pointer z-10">
//                 <Image
//                   alt="Software Product"
//                   className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-110"
//                   height={200}
//                   src={DMTS}
//                   style={{
//                     aspectRatio: "500/400",
//                     objectFit: "contain",
//                   }}
//                   width={600}
//                 />
//                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <Button size="lg" variant="outline">
//                     View Details
//                   </Button>
//                 </div>
//               </div>
//             </DrawerTrigger>
//             <DrawerContent>
//               <div className="grid md:grid-cols-2 gap-8 items-start">
//                 <div className="flex justify-center">

//                   <Image
//                     alt="Software Product"
//                     className="max-w-full h-auto rounded-lg"
//                     height={300}
//                     src={DMTS}
//                     style={{
//                       aspectRatio: "400/300",
//                       objectFit: "contain",
//                     }}
//                     width={400}
//                   />
//                 </div>
//                 <div className="grid p-10 gap-4">
//                   <h2 className="text-3xl font-bold">DMTS Aqualogix</h2>
//                   {/* <p className="text-gray-500">
//                     IERP is a powerful and intuitive platform that streamlines your workflow and boosts
//                     productivity. With cutting-edge features and a user-friendly interface, it's the perfect solution for
//                     businesses of all sizes.
//                   </p> */}
//                   <div className="grid gap-2">
//                     <div className="flex items-center gap-2">

//                       <span>- DMTS tracking software for creating routes for user to travel and manage routes.</span>
//                     </div>
//                     <div className="flex items-center gap-2">

//                       <span>- It has reporting section regarding routes and users</span>
//                     </div>
//                     <div className="flex items-center gap-2">

//                       <span>- It consists of ONM and surveys for users on completing routes</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </DrawerContent>
//           </Drawer>
//           <Drawer>
//             <DrawerTrigger asChild>
//               <div className="group absolute -right-64 -bottom-20 rounded-2xl overflow-hidden rounded-lg cursor-pointer">
//                 <Image
//                   alt="Software Product"
//                   className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-110"
//                   height={200}
//                   src={WatermanWarranty}
//                   style={{
//                     aspectRatio: "600/400",
//                     objectFit: "contain",
//                   }}
//                   width={600}
//                 />
//                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <Button size="lg" variant="outline">
//                     View Details
//                   </Button>
//                 </div>
//               </div>
//             </DrawerTrigger>
//             <DrawerContent>
//               <div className="grid md:grid-cols-2 gap-8 items-start">
//                 <div className="flex justify-center">

//                   <Image
//                     alt="Software Product"
//                     className="max-w-full h-auto rounded-lg"
//                     height={300}
//                     src={WatermanWarranty}
//                     style={{
//                       aspectRatio: "400/300",
//                       objectFit: "contain",
//                     }}
//                     width={400}
//                   />
//                 </div>
//                 <div className="grid p-10 gap-4">
//                   <h2 className="text-3xl font-bold">Waterman Warranty</h2>
//                   <p className="text-gray-500">
//                     It ensures customer satisfaction and revenue retention while tracking transactions and communications between a manufacturer and its distributors.
//                   </p>
//                   <div className="grid gap-2">
//                     <div className="flex items-center gap-2">

//                       <span>- Customer Satisfaction and Revenue Retention</span>
//                     </div>
//                     <div className="flex items-center gap-2">

//                       <span>- Transaction Tracking</span>
//                     </div>
//                     <div className="flex items-center gap-2">

//                       <span>- Communication Management
//                       </span>
//                     </div>
//                   </div>
//                   {/* <div className="flex gap-2">
//                     <Button size="lg">Try IT !!!</Button>
//                     <Button size="lg" variant="outline">
//                       Learn More
//                     </Button>
//                   </div> */}
//                 </div>
//               </div>
//             </DrawerContent>
//           </Drawer>
//         </div>
//       </div>
//     </div>
//   )
// }
import { Button } from "@/components/ui/button";
import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer";
import DevPO from "../../../public/Solution/DEV PO.png";
import DMTS from "../../../public/Solution/aqualogixdmts.png";
import Banas from "../../../public/Solution/Banasbanas.png";
import WatermanWarranty from "../../../public/Solution/Waterman Warranty.png";
import Image from "next/image";

const products = [
  {
    src: DevPO,
    title: "DEV PO",
    description: "A Dev PO module manages Purchase Orders (PO), Goods Receipt Notes (GRN), job work, and payments.",
  },
  {
    src: Banas,
    title: "Umang Mall Dashboard",
    description: "It has LOB Sales Summary, Store Wise Monthly Sales, Store Wise P&L Pages, Daily Sales Report Page With Graphs and tables.",
  },
  {
    src: DMTS,
    title: "DMTS Aqualogix",
    description: "DMTS tracking software for creating routes for user to travel and manage routes.",
  },
  {
    src: WatermanWarranty,
    title: "Waterman Warranty",
    description: "Ensures customer satisfaction and revenue retention while tracking transactions and communications between a manufacturer and its distributors.",
  },
];

export function ProductPreview() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 max-w-6xl mx-auto">
      {products.map((product, index) => (
        <div key={index} className="relative w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-lg shadow-lg group">
          <Drawer>
            <DrawerTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  alt={product.title}
                  src={product.src}
                  layout="responsive"
                  width={400}
                  height={300}
                  className="transition-transform duration-300 transform group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-6">
                <div className="mt-4 flex flex-col items-center">
                  <Image
                    alt={product.title}
                    src={product.src}
                    layout="intrinsic"
                    width={500} // Adjusted width for a smaller view
                    height={225} // Adjusted height for a smaller view
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
                  <p className="text-gray-600 mt-2 pl-2">{product.description}</p>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      ))}
    </div>
  );
}