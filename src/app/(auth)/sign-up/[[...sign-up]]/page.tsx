import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="container mx-auto">
      <div className="flex items-start justify-center min-h-screen">
        <div className="mt-20">
          <SignUp />
        </div>
      </div>
    </main>
  );
}
