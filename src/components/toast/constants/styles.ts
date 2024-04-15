import type { StylesOf } from '~/@types/helpers'
import type { Types } from '../helpes/types'

export const TYPES: StylesOf<Types> = {
  error: 'border-red-600 bg-red-200',
  message: 'border-gray-600 bg-gray-200',
  success: 'border-teal-600 bg-teal-200',
  warning: 'border-amber-600 bg-amber-200',
}

export const PROGRESS_TYPES: StylesOf<Types> = {
  error: '[&::-webkit-progress-value]:bg-red-500',
  message: '[&::-webkit-progress-value]:bg-gray-500',
  success: '[&::-webkit-progress-value]:bg-teal-500',
  warning: '[&::-webkit-progress-value]:bg-amber-500',
}
