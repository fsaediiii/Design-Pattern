import { render, screen } from "@testing-library/react";
import { NotificationProvider } from "../../context/notification/provider";
import NotificationList from ".";
import "@testing-library/jest-dom";

const renderWithProvider = (ui: React.ReactNode) => {
  return render(<NotificationProvider>{ui}</NotificationProvider>);
};

test("Error-free page rendering", () => {
  renderWithProvider(<NotificationList />);
  expect(screen.getByText("نوتیفیکیشن")).toBeInTheDocument();
});
