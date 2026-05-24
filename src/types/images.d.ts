// Allow importing image files in TypeScript
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.svg' {
  const content: any;
  export default content;
}
