import type { view } from "../../customtypes/types";

export type BottomBarButton = {
  name: string;
  targetView: view;
};

export const buttons: BottomBarButton[] = [
  { name: "General", targetView: "General" },
  { name: "Writing", targetView: "Writing" },
  { name: "Plotter", targetView: "Plotter" },
  { name: "Map", targetView: "Map" },
  { name: "Timeline", targetView: "Timeline" },
];