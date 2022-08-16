import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

test("quando o input esta vazio, novos participantes nao podem ser adicionadod", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const botao = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(botao).toBeDisabled();
});

test("adicionar um participante caso exista nome preenchido", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const botao = screen.getByRole("button");

  fireEvent.change(input, {
    target: {
      value: "Ana Catarina",
    },
  });

  fireEvent.click(botao);

  expect(input).toHaveFocus();
  expect(input).toHaveValue("");
});

test('nomes duplicados nao podem ser adicionados na lista', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const botao = screen.getByRole("button");

  fireEvent.change(input, {
    target: {
      value: "Ana Catarina",
    },
  });
  fireEvent.click(botao);
  fireEvent.change(input, {
    target: {
      value: "Ana Catarina",
    },
  });

  fireEvent.click(botao);

  const mensagemDeErro = screen.getByRole('alert')

  expect(mensagemDeErro.textContent).toBe('Nomes duplicados nao sao permitidos!')
 
});
