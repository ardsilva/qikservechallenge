import { Items } from "@/types";


interface QuantityButtonProps {
  icon: React.ReactElement;
  primaryColor: string | undefined;
  handleClick: (arg0: Items | number) => void;
  item: Items | number;
  disabled?: boolean;
  testId?: string;
}

export default function QuantityButton({ icon, primaryColor, handleClick, item, disabled = false, testId }: QuantityButtonProps) {
  return (
    <button
      data-testid={testId}
      style={{ backgroundColor: primaryColor }}
      className={`cursor-pointer rounded-full text-white `}
      onClick={() => handleClick(item)}
      disabled={disabled}>
      {icon}
    </button>
  )
}