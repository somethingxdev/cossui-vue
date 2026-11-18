export interface ComponentDoc {
  slug: string
  title: string
  description: string
  /** The page of the UI SDK component, for the API reference link. */
  uiSdk: boolean
  /** The page of the original React component on coss.com. */
  coss: boolean
}

export interface NavGroup {
  title: string
  items: { title: string, to: string }[]
}
