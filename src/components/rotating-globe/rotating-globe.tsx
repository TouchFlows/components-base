import { Component, Element, h, Method, Prop, Watch } from '@stencil/core'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'

import { Versor } from './Versor'

@Component({
  tag: 'rotating-globe',
  shadow: true,
})
export class RotatingGlobe {
  world: any
  projection: any
  sphere: {
    type: string
  }
  context: any
  land: any
  borders: any
  countries: any
  path: any
  tilt: number = 10
  p1: number[]
  p2: number[]
  r1: number[]
  r2: number[]
  arc: number
  DOM: HTMLCanvasElement

  @Element() el: HTMLElement

  /**
   * Canvas width
   */
  @Prop({ mutable: true, reflect: true }) width: number = 330

  /**
   * Canvas height
   */
  @Prop({ mutable: true, reflect: true }) height: number = 330

  /**
   * Globe options
   */
  @Prop({ mutable: true, reflect: true }) options: any

  /**
   * ISO-1302 country code to rotate to
   */
  @Prop({ mutable: true, reflect: true }) code: string = 'fr'
  @Watch('code')
  async changeCountryCode(code) {
    this.code = code
    await this._showCountry()
  }

  componentWillLoad() {
    this.options = {
      land: {
        fillStyle: 'white',
      },
      country: {
        fillStyle: '#CC3162',
      },
      borders: {
        strokeStyle: 'rgba(67, 110, 209, 0.6)',
        lineWidth: 0.5,
      },
      sphere: {
        strokeStyle: 'white',
        lineWidth: 0.5,
        fillStyle: 'rgba(255,255,255,0)',
      },
      arc: {
        strokeStyle: 'white',
        lineWidth: 1,
      },
    }
  }

  componentDidLoad() {
    const canvasElement: HTMLElement = this.el.shadowRoot.getElementById('globe')
    this.DOM = canvasElement as HTMLCanvasElement
    this.sphere = { type: 'Sphere' }

    this._world()
      .then(world => {
        this.world = world
        this.countries = topojson.feature(world, world.objects.countries).features
        this.borders = topojson.mesh(world, world.objects.countries, (a: any, b: any) => a !== b)
        this.land = topojson.feature(world, world.objects.land)
      })
      .then(() => this._drawCanvas())
      .then(() => this._showCountry())
  }

  _world = () => {
    return d3.json('https://cdn.buzzcasting.net/components/geo/countries.json')
  }

  async _drawCanvas() {
    this.context = this.DOM.getContext('2d')
    this.projection = d3.geoOrthographic().fitExtent(
      [
        [10, 10],
        [this.width - 10, this.height - 10],
      ],
      this.sphere,
    )
    this.path = d3.geoPath(this.projection, this.context)
    this.p1, (this.p2 = [0, 0]), this.r1, (this.r2 = [0, 0, 0])
    this.arc = 0
  }

  _renderCountry(country: any, arc: any) {
    this.context.clearRect(0, 0, this.width, this.height)
    this.context.beginPath(),
      this.path(this.sphere),
      (this.context.strokeStyle = this.options.sphere.strokeStyle), //"#CC3162",
      (this.context.lineWidth = this.options.borders.lineWidth),
      this.context.stroke() // "white"
    ;(this.context.fillStyle = this.options.sphere.fillStyle), this.context.fill()
    this.context.beginPath(),
      this.path(this.land),
      (this.context.fillStyle = this.options.land.fillStyle),
      this.context.fill() // "#FF3162"
    this.context.beginPath(),
      this.path(country),
      (this.context.fillStyle = this.options.country.fillStyle),
      this.context.fill()
    this.context.beginPath(),
      this.path(this.borders),
      (this.context.strokeStyle = this.options.borders.strokeStyle),
      (this.context.lineWidth = this.options.borders.lineWidth),
      this.context.stroke()
    this.context.beginPath(),
      this.path(arc),
      (this.context.strokeStyle = this.options.arc.strokeStyle),
      (this.context.lineWidth = this.options.arc.lineWidth),
      this.context.stroke()
    return this.context.canvas
  }

  @Method()
  async setCountryCode(code: string) {
    this.code = code
  }

  async _showCountry() {
    const country = this.countries.find(country => country.properties.code === this.code)
    if (typeof country === 'undefined') {
      return
    }

    this._renderCountry(country, this.arc)
    ;(this.p1 = this.p2), (this.p2 = d3.geoCentroid(country))
    ;(this.r1 = this.r2), (this.r2 = [-this.p2[0], this.tilt - this.p2[1], 0])
    const ip = d3.geoInterpolate(this.p1, this.p2)
    const iv = Versor.interpolateAngles(this.r1, this.r2)

    await d3
      .transition()
      .duration(1250)
      .tween('render', () => (t: number) => {
        this.projection.rotate(iv(t))
        this._renderCountry(country, { type: 'LineString', coordinates: [this.p1, ip(t)] })
      })
      .transition()
      .tween('render', () => (t: number) => {
        this._renderCountry(country, { type: 'LineString', coordinates: [ip(t), this.p2] })
      })
      .end()
  }

  render() {
    return (
      <div class="bgcolor">
        <canvas id="globe" width={this.width} height={this.height} />
      </div>
    )
  }
}
