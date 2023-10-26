import { HeadComponent } from '@sherweb/mjml-core'

export default class MjFont extends HeadComponent {
  static componentName = 'mj-font'

  static allowedAttributes = {
    name: 'string',
    href: 'string',
  }

  handler() {
    const { add } = this.context

    add('fonts', this.getAttribute('name'), this.getAttribute('href'))
  }
}
