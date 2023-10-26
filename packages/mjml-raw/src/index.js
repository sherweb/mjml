import { BodyComponent } from '@sherweb/mjml-core'

export default class MjRaw extends BodyComponent {
  static componentName = 'mj-raw'

  static endingTag = true

  static rawElement = true
  
  static allowedAttributes = {
    position: 'enum(file-start)',
  }

  render() {
    return this.getContent()
  }
}
