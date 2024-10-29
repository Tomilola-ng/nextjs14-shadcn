
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

interface ResponsiveGridProps {
  children?: React.ReactNode;
  variant?: '2-1' | '3-1';
  className?: string;
}

const gridStyles = cva('grid gap-4 items-center', {
  variants: {
    variant: {
      '2-1': 'grid-cols-1 md:grid-cols-2',
      '3-1': 'grid-cols-1 md:grid-cols-3',
    },
  },
  defaultVariants: {
    variant: '2-1',
  },
});

export default function ResponsiveGrid({ children, variant = '2-1', className }: ResponsiveGridProps) {
  return (
    <div className={cn(gridStyles({ variant }), className)}>
      {children}
    </div>
  );
}
