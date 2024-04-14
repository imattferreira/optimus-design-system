import type { StylesOf } from '~/@types/helpers'
import type { Shapes, Sizes, Types } from '../helpers/types'

export const SIZES: StylesOf<Sizes> = {
  size1: 'h-12 min-w-12',
  size2: 'h-11 min-w-11',
  size3: 'h-10 min-w-10'
}

export const INTERNAL_PADDING: StylesOf<Sizes> = {
  size1: 'px-4',
  size2: 'px-4',
  size3: 'px-3'
}

export const ICON_SIZES: StylesOf<Sizes> = {
  size1: 'size5',
  size2: 'size6',
  size3: 'size7'
}

export const TYPES: Record<Types, StylesOf<Shapes>> = {
  error: {
    filled: 'bg-red-700 text-red-100 hover:bg-red-500 active:ring-red-500',
    ghost: 'text-red-700 hover:text-red-400 active:ring-red-300',
    outline: 'border-red-700 text-red-700 hover:bg-red-700 hover:text-red-100 active:ring-red-500',
  },
  primary: {
    filled: 'bg-violet-700 text-violet-100 hover:bg-violet-500 active:ring-violet-500',
    ghost: 'text-violet-700 hover:text-violet-400 active:ring-violet-300',
    outline: 'border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-violet-100 active:ring-violet-500',
  },
  secondary: {
    filled: 'bg-fuchsia-700 text-fuchsia-100 hover:bg-fuchsia-500 active:ring-fuchsia-500',
    ghost: 'text-fuchsia-700 hover:text-fuchsia-400 active:ring-fuchsia-300',
    outline: 'border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-700 hover:text-fuchsia-100 active:ring-fuchsia-500',
  },
  success: {
    filled: 'bg-teal-700 text-teal-100 hover:bg-teal-500 active:ring-teal-500',
    ghost: 'text-teal-700 hover:text-teal-400 active:ring-teal-300',
    outline: 'border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-teal-100 active:ring-teal-500',
  },
}

export const ICON_TYPES: Record<Types, StylesOf<Shapes>> = {
  error: {
    filled: 'text-red-100',
    ghost: 'text-red-700 hover:text-red-400',
    outline: 'text-red-700 hover:text-red-100',
  },
  primary: {
    filled: 'text-violet-100',
    ghost: 'text-violet-700 hover:text-violet-400',
    outline: 'text-violet-700 hover:text-violet-100',
  },
  secondary: {
    filled: 'text-fuchsia-100',
    ghost: 'text-fuchsia-700 hover:text-fuchsia-400',
    outline: 'text-fuchsia-700 hover:text-fuchsia-100',
  },
  success: {
    filled: 'text-teal-100',
    ghost: 'text-teal-700 hover:text-teal-400',
    outline: 'text-teal-700 hover:text-teal-100',
  },
}

export const DISABLED_BY_SHAPE: StylesOf<Shapes> = {
  filled: 'bg-gray-300 text-gray-600',
  ghost: 'text-gray-500',
  outline: 'border-gray-300 text-gray-500',
}
