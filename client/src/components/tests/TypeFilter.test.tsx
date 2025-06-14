import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import TypeFilter from "../TypeFilter";

test("renders dropdown with all provided types", () => {
  const types = ["community", "education", "environment"];
  render(
    <TypeFilter selectedType="" setSelectedType={() => {}} types={types} />
  );

  const select = screen.getByRole("combobox");
  expect(select).toBeInTheDocument();

  // Default option
  expect(screen.getByText("All Types")).toBeInTheDocument();

  // All dynamic options
  types.forEach((type) => {
    expect(screen.getByText(type)).toBeInTheDocument();
  });

  // +1 for "All Types"
  expect(screen.getAllByRole("option")).toHaveLength(types.length + 1);
});

test("shows selected type as value", () => {
  render(
    <TypeFilter
      selectedType="education"
      setSelectedType={() => {}}
      types={["education", "community"]}
    />
  );

  const select = screen.getByRole("combobox") as HTMLSelectElement;
  expect(select.value).toBe("education");
});

test("calls setSelectedType on user selection", () => {
  let selected = "";
  const setSelectedType = (value: string) => (selected = value);

  render(
    <TypeFilter
      selectedType=""
      setSelectedType={setSelectedType}
      types={["health", "arts"]}
    />
  );

  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "arts" } });

  expect(selected).toBe("arts");
});

test("can be navigated with keyboard", () => {
  render(
    <TypeFilter
      selectedType=""
      setSelectedType={() => {}}
      types={["community"]}
    />
  );

  const select = screen.getByRole("combobox");
  select.focus();
  expect(select).toHaveFocus();
});

test("renders correctly with no types", () => {
  render(<TypeFilter selectedType="" setSelectedType={() => {}} types={[]} />);

  const options = screen.getAllByRole("option");
  expect(options).toHaveLength(1); // only "All Types"
  expect(options[0]).toHaveTextContent("All Types");
});
