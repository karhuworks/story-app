import type { view } from "../../../customtypes/types";

export type BottomBarButton = {
  name: string;
  targetView: view;
};

export const buttons: BottomBarButton[] = [
  { name: "General", targetView: "General" },
  { name: "Plotter", targetView: "Plotter" },
];
