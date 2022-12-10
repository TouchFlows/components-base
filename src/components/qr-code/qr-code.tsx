import { Component, h, Prop, State, Watch } from '@stencil/core'
// NOTE: qrcode is a node NPM JavaScript library.
// It has a browserified version for front-end usage
import qrcode from 'qrcode-generator'

import { ErrorCorrectionLevel, OutputMode } from '../../enums'
import { TailwindCss } from '../../hocs'

@Component({
  tag: 'qr-code',
  styleUrl: 'qr-code.css',
  shadow: true
})
export class QrCode {
  /**
   * String to encode in QR
   */
  @Prop() contents: string = 'BuzzCasting'
  /**
   * ErrorCorrectionLevel.High
   */
  @Prop() errorCorrectionLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.High
  @Prop() margin: number = 4
  @Prop() scale: number = 4
  @Prop() colorDark: string = '#000000ff'
  @Prop() colorLight: string = '#ffffffff'
  //@Prop() qrVersion: number;
  @Prop() outputMode: OutputMode = OutputMode.DataURI

  @State() data: string

  componentWillLoad() {
    this.computeAndSetData(this.contents, this.outputMode)
  }

  computeAndSetData(text: string, outputMode: string /*OutputMode*/) {
    const qr: QRCode = qrcode(0, this.errorCorrectionLevel)
    qr.addData(text)
    qr.make()

    if (outputMode === 'DataURI') {
      this.data = qr.createImgTag()
    } else if (outputMode === 'SVG') {
      this.data = qr.createSvgTag()
    } else if (outputMode === 'Table') {
      this.data = qr.createTableTag()
    } else {
      this.data = null
    }
  }

  @Watch('outputMode')
  changeOutputModeHandler(newValue: string /* OutputMode*/) {
    this.computeAndSetData(this.contents, newValue)
  }

  @Watch('contents')
  changeContentsHandler(newValue: string) {
    console.log('contents changed', newValue)
    this.computeAndSetData(newValue, this.outputMode)
  }
  @Watch('errorCorrectionLevel')
  changeErrorCorrectionLevelHandler() {
    this.computeAndSetData(this.contents, this.outputMode)
  }

  render() {
    return (
      <TailwindCss class="flex items-center justify-center bg-transparent">
        <div innerHTML={this.data} />
      </TailwindCss>
    )
  }
}
