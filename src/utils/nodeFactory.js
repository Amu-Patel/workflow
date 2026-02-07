export function createNode(type, label) {
  const id = Math.random().toString(36).substr(2, 9);

  if (type === "branch") {
    return {
      id,
      type,
      label,
      children: { true: [], false: [] },
    };
  }

  return {
    id,
    type,
    label,
    children: type === "end" ? {} : { default: [] },
  };
}