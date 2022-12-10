import 'dayjs/locale/fr'
import 'dayjs/locale/de'
import 'dayjs/locale/zh-cn.js'
import 'dayjs/locale/ja'

import { Component, Element, h, Prop, State, Watch } from '@stencil/core'
import dayjs from 'dayjs'

import { TailwindCss } from '../../hocs'
import { clearContents } from '../../utils/utils'

@Component({
  tag: 'date-time',
  shadow: true,
})
export class DateTime {
  /**
   * DayJS datetime formatting
   */
  @Prop({ mutable: true, reflect: true }) dateformat: string = 'D MMMM YYYY HH:mm:ss'

  /**
   * DayJS country-based locale formating
   */
  @Prop({ mutable: true, reflect: true }) locale: 'fr' | 'en' | 'de' | 'zh-cn' | 'ja' = 'en'

  @Element() el: HTMLElement

  @State() state: {
    time: string
  }

  @Watch('locale')
  localeChanged() {
    dayjs.locale(this.locale)
  }

  private timer: number
  private className: string

  connectedCallback() {
    dayjs.locale(this.locale)
    this.className = this.el.className
    this.state = {
      ...this.state,
      time: dayjs(Date.now()).locale(this.locale).format(this.dateformat),
    }
  }

  disconnectedCallback() {
    window.clearInterval(this.timer)
  }

  componentWillLoad() {
    clearContents(this.el)
    this.timer = window.setInterval(() => {
      this.state = {
        ...this.state,
        time: dayjs(Date.now()).locale(this.locale).format(this.dateformat),
      }
    }, 1000)
  }

  render() {
    const { time } = this.state
    return (
      <TailwindCss>
        <div class={this.className}>{time}</div>
      </TailwindCss>
    )
  }
}
