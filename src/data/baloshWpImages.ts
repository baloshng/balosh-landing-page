import { trustedClients } from "@/data/trustedClients"

/** Local trusted-client logo paths (`public/assets/img/logo/trusted-clients/`). */
export const BALOSH_WP_CONTENT_IMAGES: readonly string[] = trustedClients.map((c) => c.logoUrl)
