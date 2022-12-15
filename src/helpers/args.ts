import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export interface IArgs {}

const DEFAULTS: IArgs = {}

const args = yargs(hideBin(process.argv)).default<IArgs>(DEFAULTS).argv

export default args as IArgs
