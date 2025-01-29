
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    {/* Sidebar */}
    Sidebar
        {children}
   </main>
  );
}
