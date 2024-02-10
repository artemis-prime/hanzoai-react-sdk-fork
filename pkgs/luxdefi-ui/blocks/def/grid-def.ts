import type { Breakpoint } from '../../types'

type GridColumnSpec = number | { columns: number, gap: number}

interface GridDef {
    // Please define in ACCENDING order.
  at: {
    [key in (Breakpoint)]?: GridColumnSpec
  },
  mobile?: GridColumnSpec
}

const COMMON_GRID_2_COL = { 
    at: { 
      xs: {columns: 1, gap: 2}, 
      md: {columns: 2, gap: 3}, 
      lg: {columns: 2, gap: 6}
    },  
    mobile: {columns: 1, gap: 2}
} as GridDef

const COMMON_GRID_3_COL = { 
  at: { 
    xs: {columns: 1, gap: 2}, 
    md: {columns: 3, gap: 3}, 
    lg: {columns: 3, gap: 6}
  },  
  mobile: {columns: 1, gap: 2}
} as GridDef


export {
  type GridDef as default,
  type GridColumnSpec,
  COMMON_GRID_2_COL,
  COMMON_GRID_3_COL
}