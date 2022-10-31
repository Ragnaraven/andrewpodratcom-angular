export interface Theme {
  name: string;

  one: string;
  two: string;
  three: string;
  four: string;

  text?: Text;
}

export interface Text {
  light: string;
  dark: string;
}

export interface ThemeResponse {
  options: string[];
}
