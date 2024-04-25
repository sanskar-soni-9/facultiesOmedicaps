"use client";
import { useEffect, useRef } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import Link from "next/link";

const Header = () => {
  const isLoggedIn = useRef(
    typeof window !== "undefined" ? localStorage.getItem("token") || "" : "",
  );

  useEffect(() => {
    isLoggedIn.current = localStorage.getItem("token") || "";
  }, []);

  return (
    <div className="w-full">
      <header className="container mx-auto p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold">
          Faculties-O-MediCaps
        </Link>
        <nav className="flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            {!isLoggedIn.current ? (
              <>
                <SecondaryButton isLink href="/login">
                  Login
                </SecondaryButton>
                <PrimaryButton isLink href="/signup">
                  Sign up
                </PrimaryButton>
              </>
            ) : (
              ""
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
