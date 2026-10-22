// chain/overrides.ts, the hook of a chain that draws kit places itself (doc/webui.md, "Pages of a chain of its own"):
// the template draws none and shows the kit node's options, so the kit's pages are what every place shows.
import { describe, expect, it } from 'vitest';
import { KIT_NODE_OPTIONS, LOCAL_OVERRIDES } from '../chain/overrides';

describe('chain/overrides.ts in the template', () => {
  it('overrides no kit place and keeps the node options', () => {
    expect(LOCAL_OVERRIDES).toEqual([]);
    expect(KIT_NODE_OPTIONS).toBe(true);
  });
});
