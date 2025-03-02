type IconBackHomeProps = {
  className?: string;
  house?: string;
};

const IconBackHome = ({ className, house }: IconBackHomeProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="16" />
    <path
      d="M10 14L16 9.33337L22 14V21.3334C22 21.687 21.8595 22.0261 21.6095 22.2762C21.3594 22.5262 21.0203 22.6667 20.6667 22.6667H11.3333C10.9797 22.6667 10.6406 22.5262 10.3905 22.2762C10.1405 22.0261 10 21.687 10 21.3334V14Z"
      stroke={house}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 22.6667V16H18V22.6667"
      stroke={house}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconBackHome;
