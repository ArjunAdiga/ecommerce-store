interface TypographyProps {
  variant: 'h1' | 'h2' | 'label1' | 'label2' | 'body1' | "label3";
  children: React.ReactNode;
  styles?:React.CSSProperties
}

const variantStyles: Record<string, string> = {
  h1: 'text-white text-4xl font-bold', // 36px
  h2: 'text-lg font-semibold text-white', // 18px
  body1:"text-2xl font-semibold", // size 24px
  label1: 'text-base text-white',   // 16px
  label2: 'text-sm text-white', // 14px
  label3: 'text-xs text-white', // 14px
};

export default function Typography({ variant, children,styles }: TypographyProps) {
  return <div className={variantStyles[variant]} style={{...styles}}>{children}</div>;
}