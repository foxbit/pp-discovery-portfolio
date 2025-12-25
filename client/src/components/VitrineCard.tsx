import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface VitrineCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  icon?: ReactNode;
}

export default function VitrineCard({ children, className, delay = 0, title, icon }: VitrineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border/60 hover:shadow-md transition-all duration-300 group relative overflow-hidden",
        className
      )}
    >
      {/* Sophisticated hover effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-primary w-full origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-6 relative z-10">
          {icon && (
            <div className="p-2.5 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          )}
          {title && (
            <h3 className="text-lg font-bold text-primary tracking-tight">{title}</h3>
          )}
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
