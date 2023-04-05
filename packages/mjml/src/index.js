import mjml2html, { components, assignComponents } from '@sherweb/mjml-core'
import { dependencies, assignDependencies } from '@sherweb/mjml-validator'
import presetCore from '@sherweb/mjml-preset-core'

assignComponents(components, presetCore.components)
assignDependencies(dependencies, presetCore.dependencies)

export default mjml2html
