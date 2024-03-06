import { FormEvent, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { MdOutlineLock, MdOutlineMailOutline } from 'react-icons/md';
import route from 'ziggy-js';
import GuestLayout from '@/layouts/GuestLayout';
import TextInput from '@/components/TextInput';
import InputError from '@/components/InputError';
import PrimaryButton from '@/components/PrimaryButton';

interface LoginPageProps {
  status: string;
}

function LoginPage({ status }: LoginPageProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(route('login'));
  };

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-500">{status}</div>
      )}
      <h1 className="my-4 text-center text-3xl font-bold text-graydark">
        Silahkan Login
      </h1>
      <form onSubmit={submit}>
        <div className="mb-4">
          <TextInput
            icon={
              <MdOutlineMailOutline className="mx-2 text-3xl text-slate-500" />
            }
            placeholder="Masukan Email"
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData('email', e.target.value)}
          />

          <InputError message={errors.email} className="ml-12 mt-2" />
        </div>

        <div className="mb-4">
          <TextInput
            icon={<MdOutlineLock className="mx-2 text-3xl text-slate-500" />}
            placeholder="Masukan Password"
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className="ml-12 mt-2" />
        </div>

        <div className="flex w-full justify-center">
          <PrimaryButton disabled={processing}>Login</PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}

export default LoginPage;
