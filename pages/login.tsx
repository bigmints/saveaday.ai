import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    window.location.href = 'https://app.saveaday.ai';
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <p className="text-gray-500">Redirecting to login...</p>
    </div>
  );
}
