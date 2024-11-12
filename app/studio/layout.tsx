export const metadata = {
  title: "Sanity Studio",
  description: "Content management system powered by Sanity",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}

