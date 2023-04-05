import { HeadComponent } from '@sherweb/mjml-core'

export default class MjHead extends HeadComponent {
  static componentName = 'mj-head'

  handler() {
    return this.handlerChildren()
  }
}
