import { ReactNode } from 'react';
import Header from '@/components/Header';
import { AuthUser } from '@/interface/Inertia';

interface MainLayoutProps {
  user: AuthUser | null;
  children: ReactNode;
}

function MainLayout({ user, children }: MainLayoutProps) {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="relative flex min-h-screen flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header user={user} />
        <main>
          <div className="mx-auto max-w-screen-3xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
