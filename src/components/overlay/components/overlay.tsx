interface OverlayProps {
  children: React.ReactNode;
}

function Overlay({ children }: OverlayProps) {
  return (
    <div className="size-screen bg-gray-800/80 z-10">
      {children}
    </div>
  )
}

export default Overlay;
