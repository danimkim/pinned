import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    darknavy: string;
    yellow: string;
    pinColor: {
      red: string;
      yellow: string;
      skyblue: string;
      darkblue: string;
      pink: string;
      coral: string;
    };
  }
}
