import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ title, subtitle, className, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 relative", align === "center" ? "text-center" : "text-left", className)}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/10">
          Discovery Phase
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4 leading-[1.1]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
      
      {/* Decorative line */}
      <motion.div 
        initial={{ scaleX: 0, originX: align === "center" ? 0.5 : 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          "h-px bg-gradient-to-r from-primary/30 to-transparent mt-8",
          align === "center" ? "mx-auto w-2/3" : "w-full max-w-md"
        )}
      />
    </div>
  );
}
