import * as React from 'react';

const SvgCloudCheck = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <path
      d="M24 11.113a5.765 5.765 0 0 0-5.216-5.952.249.249 0 0 1-.191-.12 7.684 7.684 0 0 0-14.1 2.294.251.251 0 0 1-.227.2A4.643 4.643 0 0 0 .624 9.774 4.47 4.47 0 0 0 0 12.223a4.293 4.293 0 0 0 1.235 3.1 4.624 4.624 0 0 0 1.78 1.062.963.963 0 0 0 1.243-.86v-.026a.985.985 0 0 0-.658-1.033 2.58 2.58 0 0 1-.96-.572A2.374 2.374 0 0 1 2 12.109a2.588 2.588 0 0 1 2.586-2.588 2.7 2.7 0 0 1 .535.054.989.989 0 0 0 .811-.184 1 1 0 0 0 .392-.779c.085-5.736 8.293-7.372 10.818-2.044a.974.974 0 0 0 .941.57 3.733 3.733 0 0 1 3 1.309 3.888 3.888 0 0 1 .9 2.812 3.428 3.428 0 0 1-1.473 2.667.973.973 0 0 0-.4.964l.01.059a.968.968 0 0 0 1.525.608A5.4 5.4 0 0 0 24 11.113Z"
      fill="currentColor"
    />
    <path
      d="M12.231 9.7a6.5 6.5 0 1 0 6.5 6.5 6.508 6.508 0 0 0-6.5-6.5Zm3.124 4.155a.75.75 0 0 1 .15 1.05l-2.905 3.87a1.493 1.493 0 0 1-1.1.6h-.111a1.485 1.485 0 0 1-1.055-.443l-1.5-1.5a.75.75 0 0 1 1.066-1.06l1.3 1.3a.249.249 0 0 0 .376-.026L14.305 14a.751.751 0 0 1 1.05-.149Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCloudCheck;
