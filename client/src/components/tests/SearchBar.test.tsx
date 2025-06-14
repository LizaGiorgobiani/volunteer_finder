import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import SearchBar from "../SearchBar";

test("renders input with correct placeholder and empty value", () => {
  render(<SearchBar keyword="" setKeyword={() => {}} />);
  const input = screen.getByPlaceholderText("Search opportunities...");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("");
});

test("renders input with initial value", () => {
  render(<SearchBar keyword="food" setKeyword={() => {}} />);
  expect(screen.getByDisplayValue("food")).toBeInTheDocument();
});

test("calls setKeyword on input change", () => {
  let value = "";
  const setKeyword = (v: string) => (value = v);

  render(<SearchBar keyword={value} setKeyword={setKeyword} />);
  fireEvent.change(screen.getByPlaceholderText("Search opportunities..."), {
    target: { value: "beach" },
  });

  expect(value).toBe("beach");
});

test("calls setKeyword on every keystroke", () => {
  const setKeyword = vi.fn();

  render(<SearchBar keyword="" setKeyword={setKeyword} />);
  const input = screen.getByPlaceholderText("Search opportunities...");

  fireEvent.change(input, { target: { value: "c" } });
  fireEvent.change(input, { target: { value: "cl" } });
  fireEvent.change(input, { target: { value: "cle" } });

  expect(setKeyword).toHaveBeenCalledTimes(3);
  expect(setKeyword).toHaveBeenLastCalledWith("cle");
});

test("clears the input correctly when set to empty", () => {
  let value = "education";
  const setKeyword = (v: string) => (value = v);

  render(<SearchBar keyword={value} setKeyword={setKeyword} />);
  const input = screen.getByDisplayValue("education");

  fireEvent.change(input, { target: { value: "" } });
  expect(value).toBe("");
});

test("input element should be focusable", () => {
  render(<SearchBar keyword="" setKeyword={() => {}} />);
  const input = screen.getByPlaceholderText("Search opportunities...");

  input.focus();
  expect(input).toHaveFocus();
});
