
"use client"

import { useState } from "react"
import { MagicCard, MagicContainer } from "../magicui/magic-card"
import { motion } from "framer-motion";
import Nextjs from "../../../public/Tech Logo/Nextjs.png"
import Ios from "../../../public/Tech Logo/Ios.png"
import Android from "../../../public/Tech Logo/Android.gif"
import Flutter from "../../../public/Tech Logo/Flutter.jpg"
import Angular from "../../../public/Tech Logo/Angular.webp"
import React from "../../../public/Tech Logo/React.png"
import MongoDB from "../../../public/Tech Logo/MongoDB.png"
import Python from "../../../public/Tech Logo/python.png"
import node from "../../../public/Tech Logo/Node.png"
import Typescript from "../../../public/Tech Logo/typeScript.png"
import Mysql from "../../../public/Tech Logo/MySql.png"
import dotNET from "../../../public/Tech Logo/dotNET.png"
import vb from "../../../public/Tech Logo/VB.NET.jpg"
import Csharp from "../../../public/Tech Logo/Csharp.png"
import sql from "../../../public/Tech Logo/SQL.png"
import sqlite from "../../../public/Tech Logo/SQLite.jpg"
import Image from "next/image";

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("iOS")

  const categories = [
    "iOS", "Android", "Flutter", "Angular", "React", "Next.js",
    "MongoDB", "Python", "Node.js", "TypeScript", "MySQL",
    ".NET", "VB.Net", "C#", "SQL", "SQLite"
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full min-h-[600px]">
        {/* Sidebar Navigation */}
        <div className="lg:w-1/4 h-full">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 h-full overflow-y-auto max-h-[600px]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 px-2">Technologies</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium flex items-center justify-between group ${selectedCategory === category
                    ? "bg-teal-600 text-white shadow-lg shadow-teal-500/20"
                    : "text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm"
                    }`}
                >
                  <span>{category}</span>
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="active-pill"
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-3/4">
          <MagicCard className="h-full p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl dark:shadow-none bg-white dark:bg-gray-900/50 relative overflow-hidden group">
            <MagicContainer>
              {/* Detailed Content Blocks */}
              {selectedCategory === "iOS" && (
                <TechContent
                  image={Ios}
                  title="iOS Development"
                  desc1="Our iOS expertise enables high-performance, visually stunning native apps using Swift and Xcode. We strictly adhere to Apple's Human Interface Guidelines to ensure premium user experiences."
                  desc2="From seamless utility apps to complex enterprise solutions, we deliver secure, scalable, and robust iOS applications ready for the App Store."
                />
              )}

              {selectedCategory === "Android" && (
                <TechContent
                  image={Android}
                  title="Android Development"
                  desc1="We craft feature-rich, high-performance Android applications using Kotlin and Java. Our apps are optimized for the diverse Android ecosystem, ensuring compatibility across devices."
                  desc2="Focusing on Material Design principles, we create intuitive interfaces that users love, backed by powerful functionality and seamless integration with Google services."
                />
              )}

              {selectedCategory === "Flutter" && (
                <TechContent
                  image={Flutter}
                  title="Flutter"
                  desc1="Flutter allows us to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. It's the perfect choice for rapid MVP development without compromising performance."
                  desc2="With its hot-reload feature and expressive UI widgets, we can iterate quickly and deliver brands-consistent designs across all platforms."
                />
              )}

              {selectedCategory === "Angular" && (
                <TechContent
                  image={Angular}
                  title="Angular"
                  desc1="Angular is our framework of choice for building robust, enterprise-grade web applications. Its component-based architecture and TypeScript foundation ensure scalability and maintainability."
                  desc2="We leverage Angular for complex SPAs (Single Page Applications) that require rigorous structure, testing, and performance optimization."
                />
              )}

              {selectedCategory === "React" && (
                <TechContent
                  image={React}
                  title="React"
                  desc1="React enables us to build highly interactive and dynamic user interfaces. Its virtual DOM ensures efficient updates, making it ideal for high-traffic, data-driven applications."
                  desc2="We utilize the React ecosystem (Redux, Next.js, Hooks) to create modern web experiences that are fast, SEO-friendly, and engaging."
                />
              )}

              {selectedCategory === "Next.js" && (
                <TechContent
                  image={Nextjs}
                  title="Next.js"
                  desc1="Next.js is the React framework for production. We use it for server-side rendering (SSR) and static site generation (SSG) to achieve lightning-fast performance and superior SEO."
                  desc2="It powers our most demanding web projects, offering features like automatic image optimization, API routes, and incremental static regeneration."
                />
              )}

              {selectedCategory === "MongoDB" && (
                <TechContent
                  image={MongoDB}
                  title="MongoDB"
                  desc1="MongoDB is our go-to NoSQL database for flexible, scalable data storage. Its document model maps naturally to objects in application code, simplifying development."
                  desc2="Perfect for handling large volumes of unstructured data, real-time analytics, and content management systems."
                />
              )}

              {selectedCategory === "Python" && (
                <TechContent
                  image={Python}
                  title="Python"
                  desc1="Python drives our backend logic, data analysis, and AI/ML initiatives. Its clean syntax and vast ecosystem of libraries (Django, Flask, Pandas) allow for rapid and powerful development."
                  desc2="We use Python to build secure backends, automate tasks, and create intelligent algorithms."
                />
              )}

              {selectedCategory === "Node.js" && (
                <TechContent
                  image={node}
                  title="Node.js"
                  desc1="Node.js allows us to run JavaScript on the server side, enabling full-stack JS development. It's lightweight, efficient, and perfect for real-time applications like chat and collaborative tools."
                  desc2="Its non-blocking I/O model ensures high concurrency, making it ideal for scalable microservices."
                />
              )}

              {selectedCategory === "TypeScript" && (
                <TechContent
                  image={Typescript}
                  title="TypeScript"
                  desc1="TypeScript brings static typing to JavaScript, enhancing code quality and maintainability. We use it extensively in large-scale projects to catch errors early and improve developer productivity."
                  desc2="It seamlessly integrates with our stack (React, Angular, Node.js) to provide a robust development experience."
                />
              )}

              {selectedCategory === "MySQL" && (
                <TechContent
                  image={Mysql}
                  title="MySQL"
                  desc1="MySQL is our reliable choice for relational database management. It powers our mission-critical applications that require structured data, complex transactions, and ACID compliance."
                  desc2="Its performance, reliability, and ease of use make it a staple in our backend infrastructure."
                />
              )}

              {selectedCategory === ".NET" && (
                <TechContent
                  image={dotNET}
                  title=".NET Core"
                  desc1="The .NET ecosystem enables us to build high-performance, cross-platform applications. We use .NET Core for building scalable cloud services, web APIs, and enterprise-grade software."
                  desc2="Its versatility allows us to target Windows, Linux, and macOS with a single codebase, without sacrificing performance."
                />
              )}

              {selectedCategory === "VB.Net" && (
                <TechContent
                  image={vb}
                  title="VB.NET"
                  desc1="VB.NET remains a key part of our legacy system support and rapid desktop application development. Its integration with the .NET framework allows for powerful Windows-native applications."
                  desc2=""
                />
              )}

              {selectedCategory === "C#" && (
                <TechContent
                  image={Csharp}
                  title="C#"
                  desc1="C# is the backbone of our .NET development. It combines the power of C++ with the simplicity of VB, making it ideal for building complex enterprise systems, games, and mobile apps (via Xamarin/MAUI)."
                  desc2=""
                />
              )}

              {selectedCategory === "SQL" && (
                <TechContent
                  image={sql}
                  title="SQL"
                  desc1="Our mastery of SQL ensures efficient data management across all our projects. From complex queries to stored procedures, we optimize database performance to handle heavy loads."
                  desc2=""
                />
              )}

              {selectedCategory === "SQLite" && (
                <TechContent
                  image={sqlite}
                  title="SQLite"
                  desc1="For mobile and embedded applications, we rely on SQLite for lightweight, serverless local data storage. It's fast, reliable, and requires zero configuration."
                  desc2=""
                />
              )}

            </MagicContainer>
          </MagicCard>
        </div>
      </div>
    </div>
  )
}

function TechContent({ image, title, desc1, desc2 }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 aspect-square md:aspect-auto md:h-64 bg-white dark:bg-gray-800 p-4 flex items-center justify-center">
          <Image src={image} alt={title} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 text-transparent bg-[length:200%_auto] animate-gradient">
          {title}
        </h2>
        <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
          <p className="leading-relaxed">{desc1}</p>
          {desc2 && <p className="leading-relaxed">{desc2}</p>}
        </div>
      </div>
    </div>
  )
}
