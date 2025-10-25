declare module '@theme/Heading' {
  import type {ComponentProps} from 'react';
  export interface Props extends ComponentProps<'h1'> {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
  export default function Heading(props: Props): JSX.Element;
}