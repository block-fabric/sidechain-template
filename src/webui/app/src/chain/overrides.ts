// Kit pages this chain draws itself (chain/LocalPages.svelte renders them), keeping their place, title, icon and
// shortcut in the kit's navigation. A chain whose node is not of the kit's family (our clients of LayerTwo's sidechains,
// whose wallets, fees and peg differ from a Core node's) shows its own Home, Send, Receive, History... in the kit's
// shell. Empty in the template: every page of the kit is the kit's. See doc/webui.md, "Pages of a chain of its own".
import type { PageId } from '../lib/nav.svelte';

export const LOCAL_OVERRIDES: readonly PageId[] = [];

/**
 * Whether Settings shows the options of the kit's node (its tabs Main, Wallet, Network and the mainchain's, read with
 * options.get). A chain whose node has other options (chain/settings.ts gives its own tabs) sets false; the language
 * and the look stay.
 */
export const KIT_NODE_OPTIONS: boolean = true;
