import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 bg-black/60 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">

        <h1 className="text-blue-500 font-bold text-xl">Elton.dev</h1>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-blue-400">Home</Link>
         
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;