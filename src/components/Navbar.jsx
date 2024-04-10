import { Github, Facebook, X, Instagram, AppWindow, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Navbar() {
  const [isTrue, setTrue] = useState(false);

  const toggleMenu = () => {
    setTrue(!isTrue);
  };

  return (
    <header className="w-full py-3 border-b mb-2 px-2 md:px-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-xl md:text-2xl font-bold items-center">
          <AppWindow size={30} />
          <h1>Saba.idukashvili</h1>
        </div>
        <nav className="hidden md:flex gap-3 font-semibold text-xl">
          <ul className="cursor-pointer">Home</ul>
          <ul className="cursor-pointer">Projects</ul>
          <ul className="cursor-pointer">Skills</ul>
        </nav>
        <div className="hidden md:flex gap-6 font-semibold">
          <a href="https://github.com/Sabaiduka14"><Github size={24} className="cursor-pointer" /></a>
          <a href="https://www.facebook.com/profile.php?id=100053056426371"><Facebook size={24} className="cursor-pointer" /></a>
          <a href="https://www.instagram.com/saba.idukashvili/"><Instagram size={24} className="cursor-pointer" /></a>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div onClick={toggleMenu}>
                {isTrue ? <X size={30} /> : <Menu size={30} />}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Navbar</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Skills</DropdownMenuItem>
              <DropdownMenuItem>Projects</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
