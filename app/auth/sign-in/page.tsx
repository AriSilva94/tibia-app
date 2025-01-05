"use client";

import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/buttons/button";

export default function SignInPage() {
  const { signIn } = useAuth();
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <Typography as="h1" className="mb-6 text-center">
          Please sign in to view content
        </Typography>
        <Button type="submit" variant="primary" onClick={signIn}>
          Sign In with Google
        </Button>

        <div className="mt-4 text-center">
          <Typography as="p">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/sign-up"
              className="text-blue-600 hover:text-blue-700"
            >
              Sign up
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
