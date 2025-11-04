import { A } from "@solidjs/router";
import { theme } from "~/config/theme";

export default function Header() {
  const navLinks = [
    { name: "News", href: "/news" },
    { name: "Notice", href: "/notice" },
    { name: "Gallery", href: "/gallery" },
    { name: "Faculty", href: "/faculty" },
    { name: "About", href: "/about" },
  ];

  return (
    <header class="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-sm z-50">
      <nav class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side - School name */}
        <A href="/" class="text-xl font-bold text-blue-800 hover:text-blue-900">
          Ayesha Kutchi Urdu Highschool
        </A>

        {/* Right side - Navigation links */}
        <div class="flex gap-6">
          {navLinks.map((link) => (
            <A
              href={link.href}
              class="text-base text-slate-600 hover:text-blue-800 transition-colors"
              activeClass="text-blue-800 font-semibold"
            >
              {link.name}
            </A>
          ))}
        </div>
      </nav>
    </header>
  );
}
