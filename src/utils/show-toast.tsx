import { ReactNode } from "react";

import { toast, ToastOptions } from "react-toastify";

import { CheckCircle, Info, Message, Warning } from "@mui/icons-material";

type NotificationType = "neutral" | "success" | "error" | "warning" | "info";

const getToastIcon = (type: NotificationType) => {
  switch (type) {
    case "neutral":
      return <Info color="inherit" />;
    case "error":
      return <Warning color="error" />;
    case "info":
      return <Message color="info" />;
    case "success":
      return <CheckCircle color="success" />;
    case "warning":
      return <Warning color="warning" />;
    default:
      return <Info color="inherit" />;
  }
};

export function showToast(
  type: NotificationType,
  content: ReactNode,
  options?: ToastOptions
): void {
  toast(
    <div className="toast-message">
      <span className="toast-icon">{getToastIcon(type)}</span>
      <span>{content}</span>
    </div>,
    {
      ...options,
    }
  );
}
