export function LogoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="HappyPaws logo"
    >
      <title>HappyPaws</title>
      {/* Teal rounded square */}
      <rect width="40" height="40" rx="10" fill="#115E59" />
      {/* Paw print */}
      {/* Main pad */}
      <ellipse cx="20" cy="24" rx="7" ry="6" fill="#2DD4BF" opacity="0.9" />
      {/* Toe beans */}
      <circle cx="13" cy="16" r="3" fill="#2DD4BF" opacity="0.9" />
      <circle cx="20" cy="13" r="3" fill="#2DD4BF" opacity="0.9" />
      <circle cx="27" cy="16" r="3" fill="#2DD4BF" opacity="0.9" />
    </svg>
  );
}

export function LogoFull({ iconClassName, textClassName }: { iconClassName?: string; textClassName?: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoIcon className={iconClassName || "h-10 w-10"} />
      <span className={`font-bold tracking-tight ${textClassName || "text-xl text-slate-900"}`}>
        Happy<span className="text-brand-teal">Paws</span>
      </span>
    </span>
  );
}
