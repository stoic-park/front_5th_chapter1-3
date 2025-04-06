// TODO: 과제 스타트!
export function shallowEquals<T>(objA: T, objB: T): boolean {
  if (objA === objB) {
    return true;
  }
  // 배열
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }
    return objA.every((value, index) => objB[index] === value);
  }
  // 객체
  if (
    typeof objA === "object" &&
    objA !== null &&
    typeof objB === "object" &&
    objB !== null
  ) {
    const keysA = Object.keys(objA as Record<string, unknown>);
    const keysB = Object.keys(objB as Record<string, unknown>);
    if (keysA.length !== keysB.length) {
      return false;
    }
    return keysA.every(
      (key) =>
        (objB as Record<string, unknown>)[key] ===
        (objA as Record<string, unknown>)[key],
    );
  }
  return objA === objB;
}
