import { Link } from '@inertiajs/react';
import { useState } from 'react';
import UserDropdown from './UserDropdown';
import { AuthUser } from '@/interface/Inertia';

interface HeaderProps {
  user: AuthUser | null;
}

const Header = ({ user }: HeaderProps) => {
  const [isOpenDropdownUser, setIsOpenDropdownUser] = useState(false);
  return (
    <header className="sticky flex justify-center px-8 shadow-3">
      <nav className="flex w-full max-w-screen-2xl items-center justify-between py-4">
        <div>
          <Link href="/" className="text-lg font-bold">
            Nasari Digital
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div
            onClick={() => setIsOpenDropdownUser(!isOpenDropdownUser)}
            className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black font-semibold text-white shadow-3"
          >
            <span>
              {user?.name &&
                user.name
                  .replace(/\b(\w)\w*\s*/g, (_: string, firstChar: string) =>
                    firstChar.toUpperCase(),
                  )
                  .slice(0, 2)}
            </span>
            <UserDropdown user={user} isOpen={isOpenDropdownUser} />
          </div>
        </div>
        <ul className="block sm:hidden">
          <Link
            href="/"
            className="router-link-active router-link-exact-active link"
            aria-current="page"
          >
            Home
          </Link>
          <Link href="/blogs" className="link">
            Blogs
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
