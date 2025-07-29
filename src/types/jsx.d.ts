/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [elemName: string]: any;
  }
}
