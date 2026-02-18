
export const FlutterIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
     <path d="M13.509 13.528l-3.243 3.246 6.551 6.551H24L13.509 13.528z"/>
     <path d="M24 0h-7.086L5.206 11.666l3.22 3.22L24 0z"/>
  </svg>
);

export const ReactIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <circle cx="0" cy="0" r="2.05" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const TailwindIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
);

export const NodeIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M12 2l-9.8 5.6v11.2l9.8 5.6 9.8-5.6V7.6L12 2zm1 16.6v-5.2l4.8-2.8-1.6-1-3.2 1.8v-3.6l-2-1.2-2 1.2v7.2l-3.2-1.8-1.6 1 4.8 2.8v5.2l-5.8-3.4V8.8L12 4.2l6.8 4.6v8.6l-5.8 3.4z"/>
  </svg>
);

export const JavaIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M2.5 17h13c1.9 0 3.5-1.6 3.5-3.5v-6h1c1.7 0 3 1.3 3 3s-1.3 3-3 3h-1.4c-.4 1.2-1.5 2-2.8 2h-1c1.2 1.8 1.7 4 1.2 6.1C15.4 20.3 13.9 22 12 22H6c-2.2 0-4-1.8-4-4v-1zm15-8v1c0 1.1 0.9 2 2 2s2-.9 2-2c0-.6-.4-1-1-1h-3zM4.5 15h11c1.2 0 2.2-.9 2.4-2h-15c.6 1.4 1.6 2 1.6 2zM15 3H3v4h12V3z"/>
    <path d="M12 2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1h-2c-.6 0-1-.4-1-1zM7 2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1z"/>
  </svg>
);

export const PythonIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M14.2,4.8h-4.4c-2.4,0-4.4,2-4.4,4.4v2.2h6.6v0.9H12v-0.9h1.1V9.2c0-1.2,1-2.2,2.2-2.2h2.2V4.8H14.2z M12.9,6.5 c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9C12,6.9,12.4,6.5,12.9,6.5z"/>
    <path d="M9.8,19.2h4.4c2.4,0,4.4-2,4.4-4.4v-2.2H12v-0.9h1.1v0.9H12v2.2c0,1.2-1,2.2-2.2,2.2H7.6v2.2H9.8z M11.1,17.5 c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9C12,17.1,11.6,17.5,11.1,17.5z"/>
  </svg>
);

export const SQLIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M12 3c-4.418 0-8 1.343-8 3v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6c0-1.657-3.582-3-8-3zm0 2c3.5 0 6 1 6 2s-2.5 2-6 2-6-1-6-2 2.5-2 6-2zm0 14c-3.6 0-6.4-1.1-7.2-2.6L4 16v-2.2c1.2 1.3 4.2 2.2 8 2.2s6.8-0.9 8-2.2V16l-.8.4c-.8 1.5-3.6 2.6-7.2 2.6zm0-5c-3.6 0-6.4-1.1-7.2-2.6L4 11V8.8c1.2 1.3 4.2 2.2 8 2.2s6.8-0.9 8-2.2V11l-.8.4c-.8 1.5-3.6 2.6-7.2 2.6z"/>
  </svg>
);

export const GitIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M2.6 10.6L10.6 2.6c0.5-0.5 1.4-0.5 1.9 0l8.9 8.9c0.5 0.5 0.5 1.4 0 1.9l-8.9 8.9c-0.5 0.5-1.4 0.5-1.9 0L2.6 12.5C2.1 12 2.1 11.1 2.6 10.6zM9.5 7.5v6.2c0.6 0.2 1.1 0.7 1.1 1.4 0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5c0-0.7 0.5-1.2 1.1-1.4V8.4C8.1 8.2 7.6 7.7 7.6 7c0-0.8 0.7-1.5 1.5-1.5S10.6 6.2 10.6 7c0 0.7-0.5 1.2-1.1 1.4v0.2L9.5 7.5zM15.1 12.1c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5S15.1 11.3 15.1 12.1z"/>
  </svg>
);

export const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M12,2C6.477,2,2,6.477,2,12c0,4.418,2.865,8.166,6.839,9.489c0.5,0.092,0.682-0.217,0.682-0.482 c0-0.237-0.008-0.866-0.013-1.7c-2.782,0.603-3.369-1.34-3.369-1.34c-0.454-1.156-1.11-1.462-1.11-1.462 c-0.908-0.62,0.069-0.608,0.069-0.608c1.003,0.07,1.531,1.03,1.531,1.03c0.892,1.529,2.341,1.087,2.91,0.832 c0.092-0.647,0.35-1.088,0.636-1.338c-2.22-0.253-4.555-1.11-4.555-4.943c0-1.091,0.39-1.984,1.029-2.683 C4.341,8.472,4,7.447,4.55,6.059c0,0,0.84-0.269,2.75,1.025C8.095,6.861,8.953,6.772,9.81,6.768 c0.856,0.004,1.714,0.093,2.511,0.316c1.909-1.294,2.747-1.025,2.747-1.025c0.551,1.388,0.21,2.413,0.108,2.695 c0.64,0.699,1.028,1.592,1.028,2.683c0,3.842-2.339,4.687-4.566,4.935c0.359,0.309,0.678,0.919,0.678,1.852c0,1.336-0.012,2.415-0.012,2.743 c0,0.267,0.18,0.578,0.688,0.48C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"/>
  </svg>
);

export const AWSIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
      <path d="M7 13l3.5-6h2L16 13h-2.1l-0.7-2H9.8l-0.7 2H7zm4-3.4h2L12 6.5 11 9.6zM13 16c-1.5 1.5-3.5 1.8-5.5 1-0.8-0.3-1.5-0.8-2-1.4l1-1.2c0.4 0.5 0.9 0.8 1.5 1 1 .3 2.1 0.1 3-0.7 0.5-0.5 1-1.2 2-2 1.4 1 1.5 2.5 0 3.3zM18 17.5l-2.5-2.5L18 12.5l1.5 1.5-1-1 2.5 2V18h-3v-0.5z"/>
  </svg>
);

export const VercelIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M12 1L24 22H0L12 1Z"/>
  </svg>
);

export const CICDIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
     <path d="M18.5,2h-13C2.5,2,0,4.5,0,7.5s2.5,5.5,5.5,5.5h13c3,0,5.5-2.5,5.5-5.5S21.5,2,18.5,2z M5.5,11C3.6,11,2,9.4,2,7.5 S3.6,4,5.5,4h13c1.9,0,3.5,1.6,3.5,3.5s-1.6,3.5-3.5,3.5H5.5z M18.5,11h-13C2.5,11,0,13.5,0,16.5s2.5,5.5,5.5,5.5h13 c3,0,5.5-2.5,5.5-5.5S21.5,11,18.5,11z M5.5,20C3.6,20,2,18.4,2,16.5S3.6,13,5.5,13h13c1.9,0,3.5,1.6,3.5,3.5s-1.6,3.5-3.5,3.5 H5.5z"/>
  </svg>
);

export const TypeScriptIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M22.26 2H1.74C.78 2 0 2.78 0 3.74V22.26C0 23.22.78 24 1.74 24H22.26C23.22 24 24 23.22 24 22.26V3.74C24 2.78 23.22 2 22.26 2zM12.9 14.33c-.02-1.85 1.57-2.7 3.96-2.7 1.48 0 2.36.43 2.36.43l-.4 2.1s-.86-.44-1.92-.44c-1.12 0-1.6.35-1.6.86 0 .61.9.72 2.37 1.23 2.05.72 3 1.8 3 3.32 0 2.4-2.02 3.6-4.63 3.6-2.02 0-3.32-.6-3.32-.6l.48-2.18s1.1.72 2.53.72c1.17 0 1.63-.4 1.63-1 0-.74-.92-.9-2.4-1.42-1.74-.6-2.9-1.6-2.9-3.34 0-1.6 1.15-2.8 2.85-2.8zm-5.7 6.4h-2.2v-6.3H2.07v-2h8.04v2H7.2v6.3z"/>
  </svg>
);

export const FramerIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M4 0h16v8h-8zM4 12V8h8zM4 12h8l8 8H4z" />
  </svg>
);

export const GeminiIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M11.5,0.5H12.5V8.08C12.5,8.08,12.5,9.5,13.92,9.5C15.34,9.5,23.5,9.5,23.5,9.5V10.5H16C14.62,10.5,13.5,11.62,13.5,13V23.5H12.5V14.92C12.5,14.92,12.5,13.5,11.08,13.5C9.66,13.5,1.5,13.5,1.5,13.5V12.5H9C10.38,12.5,11.5,11.38,11.5,10V0.5Z" />
  </svg>
);

export const PyTorchIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M7.74,13.9C7.45,15.77 7,16.5 6.34,16.89C5.36,17.47 4.14,16.43 4.41,14.54C4.64,12.92 6.06,7.5 7.14,5.88C7.5,6 8.36,8 7.74,13.9M14.66,12.5C14.7,11.9 14.5,10.6 13.9,9.4C13,7.5 11.53,5.55 10.4,4.36C10.4,4.36 10.34,4.88 10.46,5.34C11.13,8.04 12,11.5 10.95,14.4C10.23,16.42 9.17,17.7 8.35,18.23C7.43,18.82 7.07,19.34 7.27,19.64C7.47,19.94 8.23,19.85 9.14,19.26C10.61,18.33 13.63,16 14.66,12.5M19.59,12.5C19.63,11.9 19.43,10.6 18.83,9.4C17.93,7.5 16.46,5.55 15.33,4.36C15.33,4.36 15.27,4.88 15.39,5.34C16.06,8.04 16.93,11.5 15.88,14.4C15.16,16.42 14.1,17.7 13.28,18.23C12.36,18.82 12,19.34 12.2,19.64C12.4,19.94 13.16,19.85 14.07,19.26C15.54,18.33 18.56,16 19.59,12.5Z" />
  </svg>
);
