// app/sign-in/[[...sign-in]]/page.tsx
'use client';

import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
