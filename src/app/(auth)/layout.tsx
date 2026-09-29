export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-10 h-10 bg-primary-600 rounded-lg mr-3"></div>
            <h1 className="text-2xl font-bold text-gray-900">J&D Sync</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
