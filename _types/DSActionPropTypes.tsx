type ActionType =
  | ((n: string | number | undefined) => void)
  | ((n: string | number, i: number) => void)
  | (() => void)

export type DSActionArrayPropTypes = {
  title: string
  input1Type: string | null
  input2Type: string | null
  icon: { class: string; text: string }
  action: ActionType
}

export type DSActionPropTypes = {
  title: string
  input1Type: string | null
  input2Type: string | null
  icon: { class: string; text: string }
  selected: boolean
  onSelect: () => void
  action: ActionType
}
