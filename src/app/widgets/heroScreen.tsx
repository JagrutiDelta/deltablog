"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";
import DeltaIerp from "../../../public/DashboardProduct/Delta IERP.png"
import GateMOdule from "../../../public/DashboardProduct/GateModule.png"
import Barcode from "../../../public/DashboardProduct/Barcode.png"
import Mytime from "../../../public/DashboardProduct/Mytime.png"
import iShop from "../../../public/DashboardProduct/iShop.png"
import kanban from "../../../public/DashboardProduct/Kanban.png"
import iAccount from "../../../public/DashboardProduct/iAccount.png"
import Inventry from "../../../public/DashboardProduct/Inventry.png"
import iVendor from "../../../public/DashboardProduct/iVendor.png"
import LabCart from "../../../public/DashboardProduct/Labcart.png"
import PandC from "../../../public/DashboardProduct/p.png"

export function HeroParalla() {

    return <HeroParallax products={products} />;
}
export const products = [

    {
        title: "Project Plannig & Control",
        link: "/solutions/PPC",
        thumbnail: PandC.src,
    },
    {
        title: "iVendor ",
        link: "/solutions/iVendor",
        thumbnail: iVendor.src,
    },
    {
        title: "Inventory ",
        link: "/solutions/Deltainventry",
        thumbnail: Inventry.src,
    },
    {
        title: "iAccount ",
        link: "/solutions/iAccount",
        thumbnail: iAccount.src,
    },
    {
        title: "GateModule",
        link: "/solutions/GateModule",
        thumbnail:
            GateMOdule.src,
    },
    {
        title: "DeltaIerp ",
        link: "/solutions/iERP",
        thumbnail: DeltaIerp.src,
    },
   
    {
        title: "Barcode",
        link: "/solutions/Barcode",
        thumbnail: Barcode.src,
    },

    {
        title: "Labhchart",
        link: "/solutions/labhCart",
        thumbnail:
        LabCart.src,
    },
    {
        title: "Kanban",
        link: "/solutions/Kanban",
        thumbnail: kanban.src,
    },
    {
        title: "iShop",
        link: "/solutions/iShop",
        thumbnail: iShop.src,
    },
    {
        title: "MyTIme",
        link: "/solutions/MyTime",
        thumbnail: Mytime.src,
    },

];
