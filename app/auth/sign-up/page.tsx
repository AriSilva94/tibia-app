import Link from "next/link";
import SignUpForm from "./SignUpForm";
import { Typography } from "@/components/ui/typography";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <Typography as="h1" className="mb-6 text-center">
          Create your account
        </Typography>
        <SignUpForm />

        <div className="mt-4 text-center">
          <Typography as="p">
            Already have an account?{" "}
            <Link
              href="/auth/sign-in"
              className="text-blue-600 hover:text-blue-700"
            >
              Sign in
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
