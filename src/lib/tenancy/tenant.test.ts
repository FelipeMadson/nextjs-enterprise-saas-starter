import { test, describe } from 'node:test';
import * as assert from 'node:assert';
import { TenantResolver, Tenant } from './tenant.js';

describe('Next.js 15 Multi-Tenant Isolation Resolver Test Suite', () => {
  test('should resolve tenant from subdomain successfully', () => {
    const resolver = new TenantResolver();
    const mockTenant: Tenant = {
      id: '550e8400-e29b-41d4-a716-446655440000',
      slug: 'acme-corp',
      name: 'Acme Corporation',
      tier: 'ENTERPRISE',
      active: true
    };
    resolver.registerTenant(mockTenant);

    const resolved = resolver.resolveByHostname('acme-corp.platform.io');
    assert.notStrictEqual(resolved, null);
    assert.strictEqual(resolved?.name, 'Acme Corporation');
    assert.strictEqual(resolved?.tier, 'ENTERPRISE');
  });

  test('should ignore common host prefixes and unknown subdomains', () => {
    const resolver = new TenantResolver();
    assert.strictEqual(resolver.resolveByHostname('www.platform.io'), null);
    assert.strictEqual(resolver.resolveByHostname('unknown.platform.io'), null);
  });
});
