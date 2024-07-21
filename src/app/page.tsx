// app/page.tsx
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';
import { Spacer } from '@nextui-org/react';

export default function Page() {
  return (
    <div>
      <header className='w-full h-14'>
        <div className='fixed top-4 right-8  flex justify-stretch items-center'>
          <ThemeSwitcher />
          <Spacer x={4} />
          <UserButton />
        </div>
      </header>
      <div className='flex justify-center items-center m-4'>
        <main className='flex flex-col items-center justify-center w-full border-x-2 sm:w-full md:w-9/12 lg:w-6/12'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique, pariatur id dolor numquam, dolore porro eligendi minima quae laudantium autem ab incidunt. Perspiciatis in sunt recusandae ab tempora maxime?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique, pariatur id dolor numquam, dolore porro eligendi minima quae laudantium autem ab incidunt. Perspiciatis in sunt recusandae ab tempora maxime?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique, pariatur id dolor numquam, dolore porro eligendi minima quae laudantium autem ab incidunt. Perspiciatis in sunt recusandae ab tempora maxime?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique, pariatur id dolor numquam, dolore porro eligendi minima quae laudantium autem ab incidunt. Perspiciatis in sunt recusandae ab tempora maxime?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique, pariatur id dolor numquam, dolore porro eligendi minima quae laudantium autem ab incidunt. Perspiciatis in sunt recusandae ab tempora maxime?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique, pariatur id dolor numquam, dolore porro eligendi minima quae laudantium autem ab incidunt. Perspiciatis in sunt recusandae ab tempora maxime?</p>
        </main>
      </div>
    </div>
  )
}