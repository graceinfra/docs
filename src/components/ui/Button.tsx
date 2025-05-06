import clsx from "clsx";

export function Button({
  children,
  className,
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center h-9 rounded-md text-sm font-medium transition-colors hover:cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400";
  const variants = {
    default: clsx(
      "border bg-black text-white shadow hover:bg-black/90",
      "dark:bg-white dark:text-black dark:hover:bg-white/90"
    ),
    outline: clsx(
      "border bg-neutral-100 text-black hover:bg-neutral-200",
      "dark:border-neutral-800 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-900"
    ),
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
