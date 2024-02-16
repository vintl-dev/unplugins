import { plugin as basePlugin, type Options } from '../plugin/index.ts'
import type {} from 'webpack'

export * from '../secondary-exports.ts'

export type PluginOptions = Options<any>

export const icuMessages = basePlugin.webpack
