import { ReactNode } from 'react';

interface GuestLayoutProps {
  children: ReactNode;
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div className="min-h-screen bg-[url(/assets/bg-login.png)] bg-cover bg-center">
      <div className="flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
        <div className="w-full overflow-hidden bg-stone-300 bg-opacity-95 px-6 py-4 shadow-4 sm:max-w-xl sm:rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
}
