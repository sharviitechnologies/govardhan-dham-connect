import emblem from "@/assets/emblem.png";
import { cn } from "@/lib/utils";

export function Emblem({ className, alt = "" }: { className?: string; alt?: string }) {
  return (
    <img
      src={emblem}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      loading="lazy"
      width={1024}
      height={1024}
      className={cn("h-10 w-10 object-contain", className)}
    />
  );
}

export function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-xs items-center gap-4 py-2">
      <span className="rule-gold flex-1" />
      <Emblem className="h-7 w-7 opacity-70" />
      <span className="rule-gold flex-1" />
    </div>
  );
}
