import { faker } from "@faker-js/faker";

function seedFromKey(key: string): void {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  faker.seed(h >>> 0);
}

/** Deterministic Picsum image URL per project slug (same URL for list, home carousel, detail hero, OG). */
export function projectCoverImageUrl(slug: string): string {
  seedFromKey(`balosh-project-cover:${slug}`);
  return faker.image.urlPicsumPhotos({
    width: 1200,
    height: 675,
    grayscale: false,
    blur: 0,
  });
}
