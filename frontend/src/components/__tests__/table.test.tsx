import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import { VehicleDTO } from "../../interfaces/types";

import TableView from "../Table/TableView";

const mockAllVehicles: VehicleDTO[] = [
  {
    id: 0,
    name: "Falcon Alfa 0",
    lat: 52.520008,
    lng: 13.404954,
    alive: true,
    previousLatLng: {
      lat: 52.520008,
      lng: 13.404954,
    },
  },
  {
    id: 1,
    name: "Fox Bravo 1",
    lat: 50.520008,
    lng: 10.404954,
    alive: true,
    previousLatLng: {
      lat: 51.520008,
      lng: 10.404954,
    },
  },
  {
    id: 2,
    name: "Tiger Alfa 2",
    lat: 40.520008,
    lng: 15.404954,
    alive: false,
    previousLatLng: {
      lat: 40.520008,
      lng: 16.404954,
    },
    hitBy: "Moscov",
  },
];

const head = ["Id", "Name", "Current Lat", "Current Lng", "Status"];


afterEach(() => {
  cleanup();
});

test("should render Table component", () => {
  render(
    <TableView
      title={"TITLE"}
      head={head}
      allVehiclesToView={mockAllVehicles}
    />
  );

  const tableElement1 = screen.getByTestId("v-1");
  expect(tableElement1).toBeInTheDocument();
  expect(tableElement1).toHaveTextContent("ONLINE");
  expect(tableElement1).toHaveTextContent("Fox Bravo 1");
  expect(tableElement1).not.toHaveTextContent("Falcon Alfa 0");
  expect(tableElement1).toContainHTML("<tr>");
  expect(tableElement1).toContainHTML("<td>");

  const tableElement2 = screen.getByTestId("v-2");
  expect(tableElement2).toHaveTextContent("Moscov");
  expect(tableElement2).not.toHaveTextContent("ONLINE");
});

test("matches two snapschots", () => {
  const tableView1 = [...mockAllVehicles];
  const tableView2 = [...mockAllVehicles];

  const tree1 = renderer
    .create(
      <TableView
        title={"TITLE"}
        head={head}
        allVehiclesToView={tableView1}
      />
    )
    .toJSON();

  const tree2 = renderer
    .create(
      <TableView
        title={"TITLE"}
        head={head}
        allVehiclesToView={tableView2}
      />
    )
    .toJSON();

  expect(tree1).toEqual(tree2);
});
