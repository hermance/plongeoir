// This file while export all type used in this app
// This way, you don't need to reference every files where a type is declared

type TypeActionToggleLoad = {|
  +type: "TOGGLE_LOAD",
  +isLoading: boolean
|}

type TypeApiAction = TypeActionToggleLoad

export type { TypeApiAction, TypeActionToggleLoad }
