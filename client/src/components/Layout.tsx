import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  House, 
  Briefcase, 
  MagnifyingGlass, 
  ChartLineUp, 
  Users, 
  Lightbulb, 
  ListChecks,
  CaretRight,
  List
} from "phosphor-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { path: "/", label: "Sobre a Empresa", icon: House },
  { path: "/projeto", label: "O Projeto", icon: Briefcase },
  { path: "/metodologia", label: "Metodologia", icon: MagnifyingGlass },
  { path: "/mercado", label: "Mercado", icon: ChartLineUp },
  { path: "/usuarios", label: "Usuários", icon: Users },
  { path: "/insights", label: "Insights", icon: Lightbulb },
  { path: "/funcionalidades", label: "Funcionalidades", icon: ListChecks },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans overflow-hidden">
      {/* Sidebar Navigation - Desktop */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-border bg-sidebar z-50 shadow-sm">
        <div className="p-6 border-b border-border/50">
          <img src="/logo.svg" alt="PP Concursos" className="h-8 w-auto mb-2" />
          <div className="flex flex-col">
            <span className="font-bold text-primary text-sm tracking-tight">PP Discovery</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Portfolio Case</span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            return (
              <Link key={item.path} href={item.path}>
                <a className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                  isActive 
                    ? "bg-primary/10 text-primary shadow-sm" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}>
                  <Icon 
                    size={18} 
                    weight={isActive ? "fill" : "regular"}
                    className={cn("transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")}
                  />
                  {item.label}
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-2 w-1.5 h-1.5 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </a>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/50">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 border border-primary/10 mb-4">
            <p className="text-xs font-medium text-primary mb-2">Discovery Finalizado</p>
            <div className="w-full bg-white/50 h-1.5 rounded-full overflow-hidden mb-2">
              <div className="bg-green-500 h-full w-full rounded-full" />
            </div>
            <p className="text-[10px] text-muted-foreground">100% concluído</p>
          </div>

          <a 
            href="https://portifolio-arcreator.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white border border-border rounded-xl p-3 flex items-center gap-3 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            
            <div className="w-10 h-10 rounded-full overflow-hidden border border-border shrink-0">
              <img src="/avatar-angelo.png" alt="Angelo Rosa" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 min-w-0 relative z-10">
              <p className="text-sm font-bold text-primary truncate">Angelo Rosa</p>
              <p className="text-xs text-muted-foreground truncate">Product Designer</p>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
              <CaretRight size={14} weight="bold" />
            </div>
          </a>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">PP</div>
          <span className="font-bold text-primary text-sm">PP Discovery</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <List size={24} />
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-20 px-4 md:hidden"
          >
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium border border-transparent",
                      location === item.path 
                        ? "bg-primary/5 border-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-accent"
                    )}
                  >
                    <item.icon size={20} weight={location === item.path ? "fill" : "regular"} />
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 min-h-screen relative bg-background">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none" />
        
        <div className="relative z-10 pt-20 md:pt-0 min-h-screen flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
          
          <footer className="py-8 px-8 text-center text-xs text-muted-foreground border-t border-border/40 mt-auto">
            <p>© 2025 PP Concursos Discovery Case. Design Engineering by Manus.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
