type IconChevronRightProps = {
  className?: string;
};

const IconChevronRight = ({ className }: IconChevronRightProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 3L11 8L6 13" strokeWidth="1.5" />
    </svg>
  );
};

export default IconChevronRight;
