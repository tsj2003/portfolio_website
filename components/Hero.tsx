"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const PROFILE_INFO = {
  name: "Tarandeep Singh Juneja",
  title: "Computer Science Student & Full Stack Developer",
  image: "https://i.postimg.cc/90SQyRqX/Screenshot-2024-12-10-at-4-49-52-PM.png",
  contacts: [
    {
      icon: Mail,
      href: "mailto:tarandeepjuneja11@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+919098520440",
      label: "Phone"
    },
    {
      icon: Github,
      href: "https://github.com/tsj2003",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tarandeep-singh-juneja-55542424b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn"
    }
  ]
};

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {PROFILE_INFO.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            {PROFILE_INFO.title}
          </p>
          <div className="flex gap-4">
            {PROFILE_INFO.contacts.map((contact) => (
              <Button key={contact.label} variant="outline" size="icon" asChild>
                <a href={contact.href} target="_blank" aria-label={contact.label}>
                  <contact.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
          <Image
            src={PROFILE_INFO.image}
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}