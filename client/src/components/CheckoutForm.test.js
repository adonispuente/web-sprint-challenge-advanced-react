import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByText, getByTestId } = render(<CheckoutForm />);

  const firstName = getByLabelText(/first Name/i);
  const lastName = getByLabelText(/last Name/i);
  const address = getByLabelText(/address/i);
  const city = getByLabelText(/city/i);
  const state = getByLabelText(/city/i);
  const zip = getByLabelText(/city/i);
  const button = getByText(/submit/i);

  fireEvent.change(firstName, { target: { value: "Adonis" } });
  fireEvent.change(lastName, { target: { value: "Puente" } });
  fireEvent.change(address, { target: { value: "Bebop 123 st" } });
  fireEvent.change(city, { target: { value: "Bopbeep" } });
  fireEvent.change(state, { target: { value: "Florida" } });
  fireEvent.change(zip, { target: { value: "12345" } });
  fireEvent.click(button);

  const Name = getByText(/Adonis Puente/i);
  const addy = getByText(/Bebop 123 st/i);
  const Smessage = getByText(/You have ordered some plants! Woo-hoo!/i);

  expect(Smessage).toBeInTheDocument();
  expect(Name).toBeInTheDocument();
  expect(addy).toBeInTheDocument();
});
