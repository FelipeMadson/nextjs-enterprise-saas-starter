import { z } from 'zod';

export const TenantSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(2).max(48).regex(/^[a-z0-9-]+$/),
  name: z.string().min(1).max(100),
  tier: z.enum(['FREE', 'GROWTH', 'ENTERPRISE']),
  active: z.boolean().default(true)
});

export type Tenant = z.infer<typeof TenantSchema>;

export class TenantResolver {
  private readonly tenants = new Map<string, Tenant>();

  registerTenant(tenant: Tenant): void {
    TenantSchema.parse(tenant);
    this.tenants.set(tenant.slug, tenant);
  }

  resolveByHostname(hostname: string): Tenant | null {
    const parts = hostname.toLowerCase().split('.');
    if (parts.length >= 2) {
      const subdomain = parts[0];
      if (subdomain !== 'www' && subdomain !== 'app') {
        return this.tenants.get(subdomain) ?? null;
      }
    }
    return null;
  }

  resolveBySlug(slug: string): Tenant | null {
    return this.tenants.get(slug.toLowerCase()) ?? null;
  }
}
