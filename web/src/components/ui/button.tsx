import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center bg-clip-padding font-semibold whitespace-nowrap transition-[opacity,background-color,border-color,color,transform] outline-none select-none focus-visible:border-[var(--color-accent)] focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 rounded-[var(--radius-control)]",
  {
    variants: {
      variant: {
        primary:
          "btn-accent-glow border border-transparent bg-[var(--color-accent)] text-white hover:opacity-95 dark:text-[#0f172a]",
        secondary:
          "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5 dark:border-[var(--surface-border)] dark:hover:bg-white/5",
        link: "border-transparent bg-transparent text-[var(--color-accent-strong)] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 min-h-11 gap-1.5 px-3 text-sm has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-8 min-h-8 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 min-h-9 gap-1 px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "min-h-11 gap-2 px-4 py-2 text-sm has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5 [&_svg:not([class*='size-'])]:size-4",
        cta: "h-12 min-h-12 gap-2 px-7 text-base [&_svg:not([class*='size-'])]:size-5",
        icon: "size-11 min-h-11 rounded-[var(--radius-control)]",
        "icon-xs":
          "size-8 min-h-8 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-12 min-h-12",
        "icon-lg": "size-11 min-h-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

