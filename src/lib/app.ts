import { initPro } from '@proappstore/sdk'

/**
 * Single PAS app instance — import this everywhere.
 * Never call initPro() again anywhere else.
 */
export const app = initPro({ appId: 'testest' })
