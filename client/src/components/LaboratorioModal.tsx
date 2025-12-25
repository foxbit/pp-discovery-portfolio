import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, X } from "phosphor-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LaboratorioModalProps {
  title: string;
  triggerText?: string;
  children: React.ReactNode;
}

export default function LaboratorioModal({ title, triggerText = "Ver Dados Brutos", children }: LaboratorioModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary/40 transition-all group">
          <FileText size={16} className="group-hover:scale-110 transition-transform" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0 gap-0 bg-white overflow-hidden border-none shadow-2xl">
        <DialogHeader className="px-6 py-4 border-b border-border bg-muted/30 flex flex-row items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md text-primary">
              <FileText size={20} weight="duotone" />
            </div>
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-0.5">Laboratório de Dados</p>
              <DialogTitle className="text-xl font-bold text-primary">{title}</DialogTitle>
            </div>
          </div>
        </DialogHeader>
        
        <ScrollArea className="flex-1 p-6 md:p-8 bg-[#f8fafc]">
          <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-primary/80 font-mono text-sm leading-relaxed">
            {children}
          </div>
        </ScrollArea>
        
        <div className="px-6 py-3 border-t border-border bg-muted/30 flex justify-between items-center text-xs text-muted-foreground font-mono">
          <span>CONFIDENTIAL // INTERNAL USE ONLY</span>
          <span>PP DISCOVERY DOCS v1.0</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
