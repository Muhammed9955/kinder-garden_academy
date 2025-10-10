"use client";

import ContactSection from "../components/ContactSection";
import Courses from "@/components/Couerses";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Hero from "@/components/hero";
import Working_hours from "@/components/Working-hours";
import Adults_Courses from "@/components/Adults_Courses";
import FacebookEmbed from "@/components/FacebookEmbed";

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen flex flex-col font-sans ">
      <Hero />
      <div className="mt-10" />
      <div className="px-6 md:px-20">
        <Services />
        <div className="mt-20" />

        <Gallery />
        <div className="mt-10" />

        <Courses />
        <div className="mt-10" />
        <Adults_Courses />
        <div className="mt-20" />

        <Working_hours />

        <div className="mt-10" />
        <ContactSection />
      </div>
      {/* <FacebookEmbed src="https://www.facebook.com/share/p/1GHRyMihri/" /> */}
    </div>
  );
}
