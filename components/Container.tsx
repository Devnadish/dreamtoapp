function BodyContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto bg-card min-h-screen  flex-col border-l border-r border-white/20 my-[90px] p-6 items-center justify-center">
      {children}
    </div>
  );
}

export default BodyContainer;
