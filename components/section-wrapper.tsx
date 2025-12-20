"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sectionVariants = cva("w-full gap-y-6 py-24", {
  variants: {
    size: {
      sm: "",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof sectionVariants> {
}

const Section = ({
  className,
  size,
  children,
  ...props
}: SectionProps) => {
  const sectionContent = (
    <section className={cn(sectionVariants({ size }), className)} {...props}>
      {children}
    </section>
  );

  return sectionContent;
};

export { Section };