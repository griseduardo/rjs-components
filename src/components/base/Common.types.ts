export interface CommonTextProps {
  children: React.ReactNode;
  color?: string;
  weight?: "normal" | "bold";
  fontWeight?: number;
  fontSize?: string;
  fontFamily?: string;
}

export interface StyledCommonTextProps {
  $color?: string;
  $weight?: "normal" | "bold";
  $fontWeight?: number;
  $fontSize?: string;
  $fontFamily?: string;
}

export interface CommonButtonTagProps {
  text: string;
  textColor?: string;
  textFontWeight?: number;
  textFontSize?: string;
  textFontFamily?: string;
  backgroundColor?: string;
  format?: "square" | "semiRounded" | "rounded";
  borderRadius?: string;
  size?: "small" | "medium" | "large";
  padding?: string;
}

export interface StyledCommonButtonTagProps {
  $textColor?: string;
  $textFontWeight?: number;
  $textFontSize?: string;
  $textFontFamily?: string;
  $backgroundColor?: string;
  $format?: "square" | "semiRounded" | "rounded";
  $borderRadius?: string;
  $size?: "small" | "medium" | "large";
  $padding?: string;
}

export interface CommonTagProps extends CommonButtonTagProps {
  type?: "default" | "success" | "alert" | "error";
}

export interface StyledCommonTagProps extends StyledCommonButtonTagProps {
  $type?: "default" | "success" | "alert" | "error";
}
