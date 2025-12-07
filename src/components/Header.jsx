import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <div className="w-full h-[100px] min-h-[100px] sticky top-0 z-10 bg-white flex items-center justify-between px-6 md:px-12 lg:px-16">
        <Link className={`text-xl md:text-2xl lg:text-4xl font-serif ${props.currPage === "main" ? "underline" : ""}`} to="/" onClick={() => props.setCurrPage("main")}>ODELIA LIM</Link>
        <div className="flex flex-row font-serif text-lg md:text-xl lg:text-2xl gap-3 md:gap-6 ">
          <Link className={`${props.currPage === "portfolio" ? "underline" : ""}`} to="/portfolio" onClick={() => props.setCurrPage("portfolio")}>Projects</Link>
          <Link className={`${props.currPage === "contact" ? "underline" : ""}`} to="/contact" onClick={() => props.setCurrPage("contact")}>Contact</Link>
        </div>
      </div>
    </>
  )
}