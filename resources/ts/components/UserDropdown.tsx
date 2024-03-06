import { MdLogout } from 'react-icons/md';
import { Link } from '@inertiajs/react';
import route from 'ziggy-js';
import { AuthUser } from '@/interface/Inertia';

interface UserDropdownProps {
  user: AuthUser | null;
  isOpen: boolean;
}

function UserDropdown({ user, isOpen }: UserDropdownProps) {
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } absolute right-0 top-0 translate-y-14 border border-stroke bg-graydark text-white shadow-4`}
    >
      <div className="flex items-center justify-between border-b border-white p-4">
        <p className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
          {user?.name &&
            user.name
              .replace(/\b(\w)\w*\s*/g, (_: string, firstChar: string) =>
                firstChar.toUpperCase(),
              )
              .slice(0, 2)}
        </p>
        <div className="ml-6 text-xs">
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="p-4">
        <Link
          method="post"
          href={route('logout')}
          className="flex w-full items-center gap-2 hover:text-teal-400"
        >
          <MdLogout className="text-xl" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default UserDropdown;
