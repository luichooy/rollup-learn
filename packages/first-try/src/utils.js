export const isArray = value => Array.isArray(value)

export const isObject = value => value && typeof value === 'object' && !isArray(value)

export const isBoolean = value => typeof value === 'boolean'
