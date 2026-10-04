import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 40 }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo TorchCoders"
      width={size}
      height={size}
      className={cn("object-contain", className)}
      priority
    />
  );
}
