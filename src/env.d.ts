/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_BUILD_EPOCH?: string
  readonly VITE_APP_INFURA_KEY: string
  readonly VITE_APP_DEFAULT_NETWORK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
