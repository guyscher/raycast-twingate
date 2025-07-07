/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Key - Your Twingate API key from the admin console */
  "apiKey": string,
  /** Network URL - Your Twingate network URL (e.g., https://company.twingate.com) */
  "networkUrl": string,
  /** Refresh Resources - Keyboard shortcut for refreshing resources */
  "shortcutRefreshResources": string,
  /** Clear All Data - Keyboard shortcut for clearing all data */
  "shortcutClearData": string,
  /** Toggle Debug Mode - Keyboard shortcut for toggling debug mode */
  "shortcutDebugMode": string,
  /** Export Debug Logs - Keyboard shortcut for exporting debug logs */
  "shortcutExportLogs": string,
  /** Toggle Favorite - Keyboard shortcut for toggling favorites */
  "shortcutToggleFavorite": string,
  /** Copy URL - Keyboard shortcut for copying resource URL */
  "shortcutCopyUrl": string,
  /** Copy Address - Keyboard shortcut for copying resource address */
  "shortcutCopyAddress": string,
  /** Copy Alias - Keyboard shortcut for copying resource alias */
  "shortcutCopyAlias": string,
  /** Copy Resource Name - Keyboard shortcut for copying resource name */
  "shortcutCopyName": string,
  /** Open Main Search - Keyboard shortcut for opening main search from recent resources */
  "shortcutOpenMainSearch": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-resources` command */
  export type SearchResources = ExtensionPreferences & {}
  /** Preferences accessible in the `recent-resources` command */
  export type RecentResources = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-resources` command */
  export type SearchResources = {}
  /** Arguments passed to the `recent-resources` command */
  export type RecentResources = {}
}

