import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Income from "../Income";
import "jest-canvas-mock";

afterEach(cleanup);

test("Deve carregar a página com o filtro 'Desde o início' ativo", () => {
  const { getByText } = render(<Income />);
  const button = getByText("Desde o início");

  expect(button).toHaveClass("active");
});

test("Deve atualizar o filtro ativo para o ano corrente ao clicar no botão 'Ano'", () => {
  const { getByText } = render(<Income />);
  const button = getByText("Ano");

  fireEvent.click(button);

  const filter = JSON.parse(window.localStorage.getItem("filter"));
  const currentYear = new Date().getFullYear();

  expect(button).toHaveClass("active");
  expect(filter).toStrictEqual({ type: "year", value: currentYear });
});

test("Deve atualizar o filtro ativo para o mês corrente ao clicar no botão 'Mês'", () => {
  const { getByText } = render(<Income />);
  const button = getByText("Mês");

  fireEvent.click(button);

  const filter = JSON.parse(window.localStorage.getItem("filter"));

  expect(button).toHaveClass("active");
  expect(filter).toStrictEqual({ type: "month", value: 0 });
});
