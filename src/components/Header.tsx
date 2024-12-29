import Link from 'next/link';
import React from 'react';
import Avatar from './Avatar';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <header className="bg-white shadow-sm text-gray-800 flex justify-between p-5">
      <Link href="/" className="flex items-center text-4xl font-thin">
        <Avatar seed="test" />
        <div className="space-y-1">
          <h1>ChatAI</h1>
        </div>
      </Link>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
