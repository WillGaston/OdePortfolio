import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [currPage, setCurrPage] = useState("main");

  return (
    <>
      <div className="w-full h-[100px] min-h-[100px] sticky top-0 z-10 bg-white flex items-center justify-between px-6 md:px-12 lg:px-16">
        <Link className={`text-xl md:text-2xl lg:text-4xl font-serif ${currPage === "main" ? "underline" : ""}`} to="/" onClick={() => setCurrPage("main")}>ODELIA LIM</Link>
        <div className="flex flex-row font-serif text-lg md:text-xl lg:text-2xl gap-3 md:gap-6 ">
          <Link className={`${currPage === "about" ? "underline" : ""}`} to="/about" onClick={() => setCurrPage("about")}>About</Link>
          <Link className={`${currPage === "projects" ? "underline" : ""}`} to="/projects" onClick={() => setCurrPage("projects")}>Projects</Link>
          <Link className={`${currPage === "contact" ? "underline" : ""}`} to="/contact" onClick={() => setCurrPage("contact")}>Contact</Link>
        </div>
      </div>
    </>
  )
}