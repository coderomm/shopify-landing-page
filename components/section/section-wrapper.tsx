import { cn } from "@/lib/utils";

export default function SectionWrapper({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) {
  return (
    <section id={id} className={cn("antialiased px-4 py-8 md:py-20 md:px-8", className)}>
      <div className="max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}