export function isEmail(value: string) {
  return value.includes("@") && value.includes(".");
}

export function isSiret(value: string) {
  return value.length === 14;
}

export function isNotEmpty(value: string) {
  return value.trim() !== "";
}
