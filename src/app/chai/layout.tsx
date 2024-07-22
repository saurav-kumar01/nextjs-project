export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>Nav Item and saurav kumar</h2>
      {children}
    </>
  );
}
