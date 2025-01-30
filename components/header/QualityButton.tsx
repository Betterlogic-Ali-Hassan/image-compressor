import type React from "react";
import { Button } from "@/components/ui/button";

interface QualityButtonProps {
  quality: string;
  isSelected: boolean;
  onClick: () => void;
}

export const QualityButton: React.FC<QualityButtonProps> = ({
  quality,
  isSelected,
  onClick,
}) => (
  <Button
    variant='outline'
    className={`${isSelected ? "bg-primary text-primary-foreground" : ""}`}
    onClick={onClick}
  >
    {quality}
  </Button>
);
