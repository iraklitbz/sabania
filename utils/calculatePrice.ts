export function calculatePrice(
  price: number,
  travelers: number,
  maxTravelers: number,
  increasePrice: number,
  selectedTravelers: number,
): number {
  if (selectedTravelers <= travelers) {
    return price;
  }
  const extraTravelers = Math.min(
    selectedTravelers - travelers,
    maxTravelers - travelers,
  );
  return price + extraTravelers * increasePrice;
}
