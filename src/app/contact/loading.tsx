export default function Loading() {
  return (
    <div className="min-h-screen py-24 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-lg">
        <div className="animate-pulse space-y-6 flex flex-col p-8 border border-white/5 bg-white/[0.02] angular-cut">
          <div className="h-6 bg-teal-500/20 w-1/3 rounded-sm"></div>
          <div className="space-y-4">
            <div className="h-10 bg-white/5 rounded-none angular-cut w-full"></div>
            <div className="h-10 bg-white/5 rounded-none angular-cut w-full"></div>
            <div className="h-24 bg-white/5 rounded-none angular-cut w-full"></div>
          </div>
          <div className="h-12 bg-teal-500/10 border border-teal-500/20 rounded-none angular-cut w-full"></div>
        </div>
      </div>
    </div>
  );
}
