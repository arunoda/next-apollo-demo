export const getInitials = (name: string) => {
  return name
    .split(" ")
    .slice(1)
    .map((i) => i[0])
    .join("");
};
