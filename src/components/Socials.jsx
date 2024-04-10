import { Github, Facebook, Instagram } from "lucide-react";
export default function Socials() {
  return (
    <main className="py-1 -mb-8 md:hidden flex w-full justify-around px-4">
      <a href="https://github.com/Sabaiduka14">
        <Github size={24} className="cursor-pointer" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100053056426371">
        <Facebook size={24} className="cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/saba.idukashvili/">
        <Instagram size={24} className="cursor-pointer" />
      </a>
    </main>
  );
}
