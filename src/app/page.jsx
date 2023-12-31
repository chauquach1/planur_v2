'use client'

export default async function Page() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 justify-center items-center">
      <div className="animate-in flex-1 flex flex-col  justify-center gap-20 max-w-4xl px-3">
        <h1 className="text-4xl font-bold">Planur Landing</h1>
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs"></footer>
    </div>
  );
}
