"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import moment from "moment"
import Link from "next/link"
import axios from "axios"
import { Calendar, User as UserIcon, Clock, ChevronRight, Loader2 } from "lucide-react"

export default function Blogs({ cityName }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(cityName ? false : true); // If cityName is present, we might show a generated one
  const testimage = "/Navlogo/Delta IERP.png"
  const formattedCity = cityName ? cityName.charAt(0).toUpperCase() + cityName.slice(1) : "";
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("delta_site_settings");
    if (saved) {
      setSiteSettings(JSON.parse(saved));
    }
  }, []);

  // Original static post logic (kept as fallback or for city pages)
  const generalPost = {
    title: "Customizable Delta iERP Software for Pump Manufacturing Industry",
    author: "Delta Infosoft",
    date: moment().format("YYYY-MM-DD"),
    image: testimage,
    category: "ERP Solutions",
    content: `
      <div class="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        <p>The <strong class="text-gray-900 dark:text-white font-semibold">pump manufacturing industry</strong> thrives on precision and customization. Managing complex product variants and fast-changing client requirements is difficult with legacy systems.</p>

        <p><strong class="text-teal-600 dark:text-teal-400 font-semibold">Delta iERP</strong> is a customizable ERP solution designed specifically for the needs of pump manufacturers — offering clarity, control, and collaboration across departments.</p>

        <h3 class="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Key Challenges</h3>
        <ul class="space-y-3">
            <li class="flex items-start">
                <span class="mr-3 text-teal-500">●</span>
                <span>Frequent customizations for impeller size, flow rate, and materials</span>
            </li>
            <li class="flex items-start">
                <span class="mr-3 text-teal-500">●</span>
                <span>Complex Bill of Materials and routing</span>
            </li>
            <li class="flex items-start">
                <span class="mr-3 text-teal-500">●</span>
                <span>Batch-wise quality traceability</span>
            </li>
            <li class="flex items-start">
                <span class="mr-3 text-teal-500">●</span>
                <span>Manual quotation and pricing inconsistencies</span>
            </li>
        </ul>

        <h3 class="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What Delta iERP Offers</h3>
         <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Dynamic BOM</h4>
                <p class="text-sm">Flexible configuration of multi-level product structures.</p>
            </div>
            <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Production Planning</h4>
                <p class="text-sm">Visual scheduling and real-time capacity overview.</p>
            </div>
             <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Sales Configurator</h4>
                <p class="text-sm">Generate custom quotes with product logic.</p>
            </div>
            <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Serial Tracking</h4>
                <p class="text-sm">Full lifecycle visibility from production to service.</p>
            </div>
        </div>

        <h3 class="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Regional Excellence</h3>
        <p>We’ve successfully deployed Delta iERP in multiple cities across India — each tailored to local needs:</p>
         <ul class="space-y-3">
            <li class="flex items-start">
                <span class="mr-3 text-teal-500">✓</span>
                <span><strong class="text-gray-900 dark:text-white">Ahmedabad:</strong> Custom project billing and contractor handling</span>
            </li>
             <li class="flex items-start">
                <span class="mr-3 text-teal-500">✓</span>
                <span><strong class="text-gray-900 dark:text-white">Jaipur:</strong> Inventory accuracy with barcode integration</span>
            </li>
             <li class="flex items-start">
                <span class="mr-3 text-teal-500">✓</span>
                <span><strong class="text-gray-900 dark:text-white">Rajkot:</strong> Multi-plant production planning</span>
            </li>
            <li class="flex items-start">
                <span class="mr-3 text-teal-500">✓</span>
                <span><strong class="text-gray-900 dark:text-white">Mumbai:</strong> Service scheduling and real-time technician tracking</span>
            </li>
        </ul>

        <h3 class="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Conclusion</h3>
        <p>Delta iERP is more than a software — it’s a scalable system designed to grow with your business. From manufacturing to after-sales service, streamline operations with a solution that adapts to you.</p>

        <div class="pt-8">
            <a href='/contactus' class='inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-500/30'>
                Book a Free Demo 
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
        </div>
      </div>
    `,
  }

  const cityPost = {
    title: `Delta iERP Implementation for ${formattedCity}-based Pump Manufacturers`,
    author: "Delta Infosoft",
    date: moment().format("YYYY-MM-DD"),
    image: testimage,
    category: `iERP ${formattedCity}`,
    content: `
        <div class="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          <p><strong class="text-gray-900 dark:text-white font-semibold">${formattedCity}</strong> is a key industrial hub, home to several innovative pump manufacturing companies. These industries face complex operational and customization challenges that traditional ERP systems often can't address.</p>
  
          <p>Our tailored <strong class="text-teal-600 dark:text-teal-400 font-semibold">Delta iERP deployment in ${formattedCity}</strong> focuses on streamlining multi-stage billing, managing subcontractors, and providing real-time financial and production analytics.</p>
  
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What We Optimized in ${formattedCity}</h3>
          <ul class="space-y-3">
              <li class="flex items-start">
                  <span class="mr-3 text-teal-500">●</span>
                  <span><strong class="text-gray-900 dark:text-white">Custom Project Billing:</strong> Enable phased billing based on production milestones</span>
              </li>
              <li class="flex items-start">
                  <span class="mr-3 text-teal-500">●</span>
                  <span><strong class="text-gray-900 dark:text-white">Contractor Work Orders:</strong> Track outsourced operations with cost visibility</span>
              </li>
              <li class="flex items-start">
                  <span class="mr-3 text-teal-500">●</span>
                  <span><strong class="text-gray-900 dark:text-white">Job Card Approval Workflow:</strong> Digitalize job card creation, verification, and costing</span>
              </li>
              <li class="flex items-start">
                  <span class="mr-3 text-teal-500">●</span>
                  <span><strong class="text-gray-900 dark:text-white">Field Service Reporting:</strong> Mobile access for local technicians and on-site updates</span>
              </li>
          </ul>
  
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Key Outcomes</h3>
           <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div class="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800 text-center">
                  <div class="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">30%</div>
                  <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Faster Job Card Processing</p>
              </div>
              <div class="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800 text-center">
                  <div class="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">Real-time</div>
                  <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Profitability Tracking</p>
              </div>
               <div class="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800 text-center">
                  <div class="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">100%</div>
                  <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Accountability in Outsourcing</p>
              </div>
          </div>
  
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Conclusion</h3>
          <p>Delta iERP brings enterprise-grade capabilities to mid-sized manufacturers in ${formattedCity}, bridging the gap between operational complexity and simplified control.</p>
  
          <div class="pt-8">
              <a href='/contactus' class='inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-500/30'>
                  Request a Demo for ${formattedCity}
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
          </div>
        </div>
      `,
  }

  useEffect(() => {
    if (!cityName) {
      fetchBlogs();
    }
  }, [cityName]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs");
      const allBlogs = response.data.blogs || [];
      const publishedBlogs = allBlogs.filter(blog => !blog.status || blog.status === 'published');
      setBlogs(publishedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const currentBlogPost = cityName ? cityPost : generalPost;

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-teal-500" size={48} />
      </div>
    );
  }

  // If we have dynamic blogs and no cityName, show the list
  if (!cityName && blogs.length > 0) {
    return (
      <div className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <Link 
                href={`/company/blogs/${blog.slug || blog._id}`}
                key={blog._id} 
                className="group relative bg-white dark:bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 border border-teal-500/20">
                  {blog.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4 font-bold uppercase tracking-wider">
                  <Calendar size={14} className="text-teal-500" />
                  <span>{moment(blog.date).format("MMM D, YYYY")}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <Clock size={14} className="text-teal-500" />
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight mb-6 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <div 
                    className="text-gray-600 dark:text-gray-400 text-sm mb-8 line-clamp-3 flex-1"
                    dangerouslySetInnerHTML={{ __html: blog.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...' }}
                />
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-neutral-800 pt-6 mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 font-black text-xs overflow-hidden border border-gray-100 dark:border-white/5">
                            {siteSettings?.identity?.logo ? (
                                <img src={siteSettings.identity.logo} className="w-full h-full object-contain p-1" alt="Logo" />
                            ) : (
                                <span>{siteSettings?.identity?.siteTitle?.substring(0, 2).toUpperCase() || "DI"}</span>
                            )}
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            {siteSettings?.identity?.siteTitle || blog.author}
                        </span>
                    </div>
                    <div className="p-3 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-all">
                        <ChevronRight size={20} />
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Fallback to static post (original behavior)
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
      {/* Main Content */}
      <div className="lg:col-span-8 space-y-10 text-left">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-medium">
            {currentBlogPost.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            {currentBlogPost.title}
          </h1>

          <div className="flex flex-wrap items-center text-base text-gray-500 dark:text-gray-400 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-[10px] font-black overflow-hidden border border-gray-100 dark:border-white/5 text-teal-600 dark:text-teal-400">
                  {siteSettings?.identity?.logo ? (
                      <img src={siteSettings.identity.logo} className="w-full h-full object-contain p-1" alt="Logo" />
                  ) : (
                      <span>{siteSettings?.identity?.siteTitle?.substring(0, 2).toUpperCase() || "DI"}</span>
                  )}
              </div>
              <span className="font-bold text-gray-900 dark:text-white">
                  {siteSettings?.identity?.siteTitle || currentBlogPost.author}
              </span>
            </div>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <span>{moment(currentBlogPost.date).format("MMMM D, YYYY")}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <span className="text-teal-600 dark:text-teal-400">5 min read</span>
          </div>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group">
          <Image
            src={currentBlogPost.image}
            alt={currentBlogPost.title}
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
            width={1200}
            height={600}
            priority
          />
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-teal-600"
          dangerouslySetInnerHTML={{ __html: currentBlogPost.content }}
        />
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 space-y-8">
        <div className="sticky top-32 space-y-8">
          {/* Deployment Locations Card */}
          <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              {cityName ? "Explore Other Cities" : "Deployed In"}
            </h3>
            <nav className="flex flex-col space-y-1">
              {[
                { name: "Ahmedabad", href: "ahmedabad" },
                { name: "Jaipur", href: "jaipur" },
                { name: "Rajkot", href: "rajkot" },
                { name: "Mumbai", href: "mumbai" },
                { name: "Surat", href: "surat" },
                { name: "Vadodara", href: "vadodara" },
                { name: "Delhi", href: "delhi" },
                { name: "Gandhidham", href: "gandhidham" },
                { name: "Vapi", href: "vapi" },
                { name: "Palanpur", href: "palanpur" },
                { name: "Mundra", href: "mundra" },
              ].filter(city => !cityName || city.href !== cityName.toLowerCase()).map((city) => (
                <Link
                  key={city.name}
                  href={`/ierp/${city.href}`}
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    iERP for {city.name}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-teal-500 transform group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Card */}
          <div className="bg-teal-600 rounded-3xl p-8 shadow-xl text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize?</h3>
              <p className="text-teal-100 mb-8 leading-relaxed">Join hundreds of manufacturers who have transformed their operations with Delta iERP.</p>
              <Link href="/contactus" className="inline-block w-full bg-white text-teal-700 font-bold py-3 px-6 rounded-xl hover:bg-teal-50 transition-colors shadow-sm">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
