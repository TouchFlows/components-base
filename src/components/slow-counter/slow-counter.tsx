import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core'

import { clearContents } from '../../utils'

/**
 * @source https://www.section.io/engineering-education/javascript-animation-counter/
 */
@Component({
  tag: 'slow-counter',
  shadow: true,
})
export class SlowCounter {
  @State() state: {
    counter: string
  }

  /**
   * Counter value
   */
  @Prop({ mutable: true, reflect: true }) value: number = 0
  @Watch('value') watchHandler(value: number) {
    if (!this.start) {
      this.start = Math.floor(this.value * 0.9999)
    }
    if (this.showPercent === 1) {
      this.plusMinus = value >= 0 ? '+' : '-'
    }
    this.animate()
  }
  /**
   * Start value of count
   */
  @Prop({ mutable: true, reflect: true }) start: number
  /**
   * For showing change percentage
   */
  @Prop({ mutable: true, reflect: true }) showPercent?: 0 | 1 = 0

  private plusMinus: string = ''
  slideInterval: number = 120000

  @Element() el: HTMLElement

  /**
   * Clear the container contents of template code
   */
  connectedCallback() {
    clearContents(this.el)
    this.state = {
      counter: '0',
    }

    this.slideInterval = parseInt(window['BuzzCastingApp'].getAttribute('interval'))
  }

  componentWillLoad() {
    this.animate()
  }

  animate = () => {
    if (!this.start || this.start === 0) {
      if (this.value > 0) {
        this.start = Math.round(this.value * 0.9999)
        console.debug(this.start)
      }
      return
    }
    const startVal = this.start

    //const endVal = (Math.floor(startVal * 0.9) )
    const endVal = this.value //startVal=== 0 ? Math.floor(this.value * 0.9) : this.value

    //let animDuration = this.duration
    let animDuration = this.slideInterval // startVal=== 0 ? this.duration :  this.slideInterval - this.duration

    let startTime: number | null = null

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now()
    if (currentTime === null) return

    //pass the current timestamp to the step function
    const step = (currentTime: number) => {
      //if the start time is null, assign the current time to startTime
      if (!startTime) {
        startTime = currentTime
      }

      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime - startTime) / animDuration, 1)

      let num = Math.floor(progress * (endVal - startVal) + startVal)

      let current: string = this.intToString(num)
      //calculate what to be displayed using the value gotten above
      this.state = {
        ...this.state,
        counter: current,
      }
      //checking to make sure the counter does not exceed the last value(lastVal)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step))
        this.start = endVal
      }
    }

    //start animating
    window.requestAnimationFrame(step)
  }

  render() {
    const { counter } = this.state
    return (
      <Host>
        <div>
          {this.plusMinus} {counter} {this.showPercent && '%'}
        </div>
      </Host>
    )
  }

  intToString = (num: any) => {
    return num.toLocaleString('en')
  }
}
