// Official prices (COP, one-time). This is the only place prices are written;
// every page reads them from here so they can never drift apart.
export const PRICES = {
  webDev: {
    landingSimple: 1_300_000,
    landingFull: 1_900_000,
    multipage: 2_500_000,
    bookingAdmin: 3_200_000,
    bookingAdminPayments: 4_200_000,
  },
  aiAgents: {
    whatsappBasic: 1_800_000,
    agendaCatalogWeb: 3_200_000,
  },
  management: {
    inventory: 4_500_000,
    ordersCatalog: 4_800_000,
  },
} as const;

/** 1300000 → "$1.300.000" (Colombian thousands separator, no decimals). */
export function formatCOP(value: number): string {
  return `$${value.toLocaleString('es-CO', { maximumFractionDigits: 0 })}`;
}
