/*
 * @Date: 2020-10-28 16:54:39
 * @Author: Allison Zhang
 * @LastEditTime: 2020-10-28 17:25:10
 * @FilePath: \temperature-control\src\App.test.js
 */
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
