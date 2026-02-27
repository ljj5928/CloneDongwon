import { footNav } from "./fnb";

export const getFootNavByGroup = (group) => {
  return footNav.find((nav) => nav.group === group)?.items ?? [];
};