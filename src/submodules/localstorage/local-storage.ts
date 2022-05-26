import { LocalStorageKey } from "./local-storage-key"

export default class LocalStotage {
  static get<T extends unknown>(key: LocalStorageKey): T | undefined {
    let rawVal = localStorage[key]
    if (!rawVal) {
      return rawVal
    } else {
      if (
        ['string', 'bigint', 'number', 'boolean'].includes(typeof rawVal)
      )
        return rawVal

      return JSON.parse(rawVal)
    }
  }
  static set(key: LocalStorageKey, value: unknown) {
    if (!value) {
      localStorage[key] = value
    } else {
      if (['string', 'bigint', 'number', 'boolean'].includes(typeof value)) {
        localStorage[key] = value
        return
      }
      localStorage[key] = JSON.stringify(value)
    }
  }
}