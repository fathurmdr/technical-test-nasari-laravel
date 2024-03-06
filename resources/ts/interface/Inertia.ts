export type AuthUser = {
  id: number;
  name: string;
  profile_photo: string;
  email: string;
  admin: string;
};

export interface InertiaProps {
  auth: {
    user: AuthUser | null;
  };
}
