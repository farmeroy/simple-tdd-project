import { render, screen } from "@testing-library/react";
import AsyncComponent from "../components/Async";

describe("Async component", () => {
  // // example using real api calls
  // // NOT good practice. Might mutate real data, uses bandwith, etc.
  // test('renders posts if request succeeds', async () => {
  //   render(<AsyncComponent />);
  //   // use getAllByRole with multiple items
  //   // use find* to return a promise and check the sreen a few times
  //   const listItemElements = await screen.findAllByRole('listitem');
  //   expect(listItemElements).not.toHaveLength(0);
  // })

  // better to use a mock
  test("renders posts if request succeeds", async () => {
    render(<AsyncComponent />);
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
