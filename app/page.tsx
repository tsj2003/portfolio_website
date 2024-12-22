"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Hero />

      <section className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="education" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-[600px] mx-auto">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <Education />
          </TabsContent>

          <TabsContent value="experience">
            <Experience />
          </TabsContent>

          <TabsContent value="projects">
            <Projects />
          </TabsContent>

          <TabsContent value="skills">
            <Skills />
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}