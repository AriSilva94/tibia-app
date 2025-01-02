import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#81689D] p-4 shadow-lg">
      <div className="container max-w-[1280px] mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">
          <Link href="/">Tibia App</Link>
        </h1>
        <div className="flex space-x-4">
          <Link href="/dashboard" className="text-white hover:text-gray-200">
            Dashboard
          </Link>
          <Link href="/auth/sign-in" className="text-white hover:text-gray-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
