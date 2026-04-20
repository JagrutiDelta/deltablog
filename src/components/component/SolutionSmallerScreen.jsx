import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import one from "../../../public/All Invoice.png"
import two from "../../../public/Candidate Payment Status.png"
import three from "../../../public/CANDO Action Taken.png"
import four from "../../../public/New.png"
import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Button } from "@/components/ui/button"


const SolutionSmallerScreen = () => {
    return (
        <>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Drawer>
                        <DrawerTrigger asChild>
                            <div className="group overflow-hidden rounded-lg cursor-pointer z-10">
                                <Image
                                    alt="Software Product"
                                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.04]"
                                    height={200}
                                    src={one}
                                    style={{
                                        aspectRatio: "600/500",
                                        objectFit: "contain",
                                    }}
                                    width={600}
                                />

                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Button size="lg" variant="outline">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="grid md:grid-cols-2 gap-8 items-start">
                                <div className="flex justify-center">

                                    <Image
                                        alt="Software Product"
                                        className="max-w-full h-auto rounded-lg"
                                        height={300}
                                        src={one}
                                        style={{
                                            aspectRatio: "400/300",
                                            objectFit: "cover",
                                        }}
                                        width={400}
                                    />
                                </div>
                                <div className="grid p-10 gap-4">
                                    <h2 className="text-3xl font-bold">DEV</h2>
                                    <p className="text-gray-500">
                                        IERP is a powerful and intuitive platform that streamlines your workflow and boosts
                                        productivity. With cutting-edge features and a user-friendly interface, it's the perfect solution for
                                        businesses of all sizes.
                                    </p>
                                    <div className="grid gap-2">
                                        <div className="flex items-center gap-2">

                                            <span>Automated task management</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            <span>Real-time collaboration tools</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            <span>Comprehensive reporting and analytics</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="lg">Try IT !!!</Button>
                                        <Button size="lg" variant="outline">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Drawer>
                        <DrawerTrigger asChild>
                            <div className="group overflow-hidden rounded-lg cursor-pointer z-10">
                                <Image
                                    alt="Software Product"
                                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.04]"
                                    height={200}
                                    src={two}
                                    style={{
                                        aspectRatio: "600/500",
                                        objectFit: "contain",
                                    }}
                                    width={600}
                                />

                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Button size="lg" variant="outline">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="grid md:grid-cols-2 gap-8 items-start">
                                <div className="flex justify-center">

                                    <Image
                                        alt="Software Product"
                                        className="max-w-full h-auto rounded-lg"
                                        height={300}
                                        src={one}
                                        style={{
                                            aspectRatio: "400/300",
                                            objectFit: "cover",
                                        }}
                                        width={400}
                                    />
                                </div>
                                <div className="grid p-10 gap-4">
                                    <h2 className="text-3xl font-bold">DEV</h2>
                                    <p className="text-gray-500">
                                        IERP is a powerful and intuitive platform that streamlines your workflow and boosts
                                        productivity. With cutting-edge features and a user-friendly interface, it's the perfect solution for
                                        businesses of all sizes.
                                    </p>
                                    <div className="grid gap-2">
                                        <div className="flex items-center gap-2">

                                            <span>Automated task management</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            <span>Real-time collaboration tools</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            <span>Comprehensive reporting and analytics</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="lg">Try IT !!!</Button>
                                        <Button size="lg" variant="outline">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Drawer>
                        <DrawerTrigger asChild>
                            <div className="group overflow-hidden rounded-lg cursor-pointer z-10">
                                <Image
                                    alt="Software Product"
                                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.04]"
                                    height={200}
                                    src={three}
                                    style={{
                                        aspectRatio: "600/500",
                                        objectFit: "contain",
                                    }}
                                    width={600}
                                />

                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Button size="lg" variant="outline">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="grid md:grid-cols-2 gap-8 items-start">
                                <div className="flex justify-center">

                                    <Image
                                        alt="Software Product"
                                        className="max-w-full h-auto rounded-lg"
                                        height={300}
                                        src={one}
                                        style={{
                                            aspectRatio: "400/300",
                                            objectFit: "cover",
                                        }}
                                        width={400}
                                    />
                                </div>
                                <div className="grid p-10 gap-4">
                                    <h2 className="text-3xl font-bold">DEV</h2>
                                    <p className="text-gray-500">
                                        IERP is a powerful and intuitive platform that streamlines your workflow and boosts
                                        productivity. With cutting-edge features and a user-friendly interface, it's the perfect solution for
                                        businesses of all sizes.
                                    </p>
                                    <div className="grid gap-2">
                                        <div className="flex items-center gap-2">

                                            <span>Automated task management</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            <span>Real-time collaboration tools</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            <span>Comprehensive reporting and analytics</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="lg">Try IT !!!</Button>
                                        <Button size="lg" variant="outline">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Drawer>
                        <DrawerTrigger asChild>
                            <div className="group overflow-hidden rounded-lg cursor-pointer z-10">
                                <Image
                                    alt="Software Product"
                                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.04]"
                                    height={200}
                                    src={four}
                                    style={{
                                        aspectRatio: "600/500",
                                        objectFit: "contain",
                                    }}
                                    width={600}
                                />

                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Button size="lg" variant="outline">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="grid md:grid-cols-2 gap-8 items-start">
                                <div className="flex justify-center">

                                    <Image
                                        alt="Software Product"
                                        className="max-w-full h-auto rounded-lg"
                                        height={300}
                                        src={one}
                                        style={{
                                            aspectRatio: "400/300",
                                            objectFit: "cover",
                                        }}
                                        width={400}
                                    />
                                </div>
                                <div className="grid p-10 gap-4">
                                    <h2 className="text-3xl font-bold">DEV</h2>
                                    <p className="text-gray-500">
                                        IERP is a powerful and intuitive platform that streamlines your workflow and boosts
                                        productivity. With cutting-edge features and a user-friendly interface, it's the perfect solution for
                                        businesses of all sizes.
                                    </p>
                                    <div className="grid gap-2">
                                        <div className="flex items-center gap-2">

                                            <span>Automated task management</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            <span>Real-time collaboration tools</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            <span>Comprehensive reporting and analytics</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="lg">Try IT !!!</Button>
                                        <Button size="lg" variant="outline">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer></CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </>
    )
}

export default SolutionSmallerScreen
