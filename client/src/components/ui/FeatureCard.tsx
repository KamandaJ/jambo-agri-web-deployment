import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn("border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group", className)}>
      <CardContent className="p-8 flex flex-col items-start gap-4 h-full">
        <div className="p-3 rounded-xl bg-accent/30 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="h-8 w-8" />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
