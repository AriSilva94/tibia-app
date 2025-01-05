"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { Button } from "../ui/buttons/button";

const Navbar = () => {
  const { user, signIn, logOut } = useAuth();

  return (
    <nav className="bg-[#81689D] p-4 shadow-lg">
      <div className="container max-w-[1280px] mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">
          <Link href="/">Tibia App</Link>
        </h1>
        <div className="flex space-x-4 items-center">
          {user ? (
            <Link href="/dashboard" className="text-white hover:text-gray-200">
              Dashboard
            </Link>
          ) : (
            <></>
          )}

          {!user ? (
            <Button
              variant="primary"
              onClick={signIn}
              className="text-white hover:text-blue-800 focus:outline-none bg-transparent hover:bg-transparent border-0 border-transparent"
            >
              Sign In with Google
            </Button>
          ) : (
            <Button variant="primary" onClick={logOut}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
