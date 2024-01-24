import { Button as MuiButton, ButtonProps } from "@mui/material";

type MuiButtonProps = Pick<
  ButtonProps,
  | "size"
  | "color"
  | "type"
  | "children"
  | "title"
  | "disabled"
  | "onClick"
  | "variant"
>;

export const Button = (props: MuiButtonProps) => {
  const {
    size = "small",
    variant = "contained",
    color = "primary",
    disabled = false,
    children,
    title,
    type = "button",
    onClick,
  } = props;
  return (
    <MuiButton
      size={size}
      color={color}
      variant={variant}
      title={title}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};
