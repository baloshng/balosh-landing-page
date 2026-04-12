import { trustedClients } from "@/data/trustedClients"

/** Remote media URLs on https://balosh.com (WordPress `/wp-content/uploads/`). */
export const BALOSH_WP_CONTENT_IMAGES: readonly string[] = trustedClients.map((c) => c.logoUrl)
