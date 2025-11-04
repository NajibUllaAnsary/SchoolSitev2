import { A } from "@solidjs/router";

export default function Footer() {
  return (
    <footer class="bg-slate-800 text-white mt-auto">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 class="text-xl font-bold mb-4">Ayesha Kutchi Urdu High School</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              Nurturing young minds for over 45 years with quality education, strong values, and a commitment to excellence in learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-sm">
              <li><A href="/about" class="text-slate-300 hover:text-white transition-colors">About Us</A></li>
              <li><A href="/faculty" class="text-slate-300 hover:text-white transition-colors">Faculty</A></li>
              <li><A href="/news" class="text-slate-300 hover:text-white transition-colors">News</A></li>
              <li><A href="/notice" class="text-slate-300 hover:text-white transition-colors">Notices</A></li>
              <li><A href="/gallery" class="text-slate-300 hover:text-white transition-colors">Gallery</A></li>
              <li><A href="/downloads" class="text-slate-300 hover:text-white transition-colors">Downloads</A></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
            <ul class="space-y-2 text-sm text-slate-300">
              <li>S.G. Road, Purulia(M)</li>
              <li>West Bengal - 723101</li>
              <li class="pt-2">
                <a href="tel:+913252224002" class="hover:text-white transition-colors">
                  +91 3252 224002
                </a>
              </li>
              <li>
                <a href="mailto:office@akuhs.edu.in" class="hover:text-white transition-colors">
                  office@akuhs.edu.in
                </a>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h3 class="text-lg font-semibold mb-4">School Hours</h3>
            <ul class="space-y-2 text-sm text-slate-300">
              <li class="flex justify-between">
                <span class="font-medium">Mon - Thu</span>
                <span>10:20 AM - 3:30 PM</span>
              </li>
              <li class="flex justify-between">
                <span class="font-medium">Friday</span>
                <span>8:00 AM - 11:00 AM</span>
              </li>
              <li class="flex justify-between">
                <span class="font-medium">Saturday</span>
                <span>10:30 AM - 1:30 PM</span>
              </li>
              <li class="flex justify-between">
                <span class="font-medium">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div class="border-t border-slate-700">
        <div class="max-w-7xl mx-auto px-4 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div class="text-center md:text-left">
              <p>© 2025 Ayesha Kutchi Urdu High School. All rights reserved.</p>
              <p class="mt-1">Site made by <span class="text-blue-400">Rakeshxapp</span></p>
            </div>
            <div class="flex gap-6">
              <A href="/privacy" class="hover:text-white transition-colors">Privacy Policy</A>
              <A href="/terms" class="hover:text-white transition-colors">Terms of Service</A>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
