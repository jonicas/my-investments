import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BaseChip from "../BaseChip";

test("should render content", () => {
  const { container } = render(<BaseChip>Content</BaseChip>);
  expect(container.textContent).toBe("Content");
});

test("should emit click event", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<BaseChip onClick={handleClick}>Mês</BaseChip>);
  const button = getByText("Mês");

  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true
  });
  fireEvent(button, clickEvent);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should set active class when prop active is true", () => {
  const { container } = render(<BaseChip active={true}>Content</BaseChip>);
  expect(container.firstChild).toHaveClass("active");
});
