
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
