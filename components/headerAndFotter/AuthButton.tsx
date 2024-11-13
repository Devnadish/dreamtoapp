import React from 'react'
import { LogIn } from 'lucide-react';
import { UserButton,  SignInButton,  ClerkLoaded } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

async function AuthButton() {
  const user = await currentUser()
  return (
    <div className='fixed flex items-center justify-center right-[15px] -bottom-[345px]'>
      <ClerkLoaded>
      {user ? <UserButton  /> : <SignInButton mode='modal'  >
        <div className='bg-primary p-1 rounded-xl cursor-pointer'>
<LogIn className="inline-block  " />
        </div>
        </SignInButton>}
      </ClerkLoaded>
    </div>
  )
}

export default AuthButton