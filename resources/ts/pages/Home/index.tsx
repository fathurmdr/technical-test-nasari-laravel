import { InertiaProps } from '@/interface/Inertia';
import MainLayout from '@/layouts/MainLayout';

function MemberPage({ auth }: InertiaProps) {
  return (
    <MainLayout user={auth.user}>
      <div className="mt-16 text-center">
        <h1 className="mb-6 text-5xl font-bold">
          Selamat Datang di Nasari Digital
        </h1>
        <p className="text-xl">Aplikasi ini dibuat untuk Techinal Test oleh</p>
        <p className="mb-10 text-xl font-semibold">Fathu Rahman</p>
      </div>
    </MainLayout>
  );
}

export default MemberPage;
