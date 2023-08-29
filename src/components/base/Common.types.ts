export interface CommonTextProps {
  children: React.ReactNode;
  color?: string;
  weight?: "normal" | "bold";
  fontWeight?: number;
  fontSize?: string;
  fontFamily?: string;
}

export interface CommonTagProps {
  text: string;
  textColor?: string;
  textWeight?: "normal" | "bold";
  textFontWeight?: number;
  textFontSize?: string;
  textFontFamily?: string;
  backgroundColor?: string;
  format?: "default" | "semiRounded" | "rounded";
  borderRadius?: string;
  size?: "small" | "medium" | "large";
  padding?: string;
}
