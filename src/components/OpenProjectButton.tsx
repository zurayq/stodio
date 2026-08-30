"use client";

import { ButtonHTMLAttributes, MouseEvent } from "react";

export function OpenProjectButton({ className = "", children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const openDialog = (event: MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(event);
    if (event.defaultPrevented) return;
    const dialog = document.getElementById("project-dialog");
    if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal();
  };

  return (
    <button {...props} type="button" className={className} onClick={openDialog}>
      {children}
    </button>
  );
}
