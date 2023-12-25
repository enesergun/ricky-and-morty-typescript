export default function extractCharacterIds(residents: string[]): string {
  if (!residents || !Array.isArray(residents)) {
    return "";
  }

  // Map the resident URLs to character IDs
  const characterIds: (string | null)[] = residents.map(url => {
    const match = url.match(/\/character\/(\d+)$/);
    return match ? match[1] : null;
  });

  // Filter out null values and join the IDs into a string
  const result: string = characterIds.filter(id => id !== null).join(",");

  return result;
}