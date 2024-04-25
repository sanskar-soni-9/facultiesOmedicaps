import Link from "next/link";

const BUTTON_STYLES =
  "text-base flex h-[36px] min-w-[90px] w-full cursor-pointer items-center justify-center rounded-lg border-2 border-action bg-action py-2 px-3 font-semibold text-white hover:opacity-50";

const PrimaryButton = ({
  children,
  isLink = false,
  href = "/",
  handleClick = () => {},
  type,
  handleSubmit = () => {},
}) => {
  return isLink ? (
    <Link href={href} className={BUTTON_STYLES}>
      {children}
    </Link>
  ) : (
    <button
      onClick={handleClick}
      onSubmit={handleSubmit}
      className={BUTTON_STYLES}
      type={type}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
