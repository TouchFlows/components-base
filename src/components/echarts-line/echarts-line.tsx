import { Component, Element, h, Host, Method, Prop, Watch } from '@stencil/core'
import { LineChart, LineSeriesOption } from 'echarts/charts'
import { GridComponent, GridComponentOption } from 'echarts/components'
import * as echarts from 'echarts/core'
import { UniversalTransition } from 'echarts/features'
import { SVGRenderer } from 'echarts/renderers'

type ECOption = echarts.ComposeOption<LineSeriesOption | GridComponentOption>

@Component({
  tag: 'echarts-line',
  styleUrl: 'echarts-line.css',
  shadow: true,
})
export class EchartsLine {
  myChart: any
  container: HTMLElement

  @Prop({ mutable: true, reflect: true }) width?: number = 350
  @Prop({ mutable: true, reflect: true }) height?: number = 50
  @Prop({ mutable: true, reflect: true }) option: any //ECOption

  @Element() el: HTMLElement

  /*componentWillLoad() {
    this.option = {
      color: [
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
      ],
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }
      ]
    }
  }*/

  componentDidLoad() {
    echarts.use([LineChart, GridComponent, UniversalTransition, SVGRenderer])
    this.container = this.el.shadowRoot.getElementById('chart') as HTMLElement
    this.myChart = echarts.init(this.container, null, { renderer: 'svg', width: this.width, height: this.height })
    this.myChart && this.option && this.myChart.setOption(this.option)
  }

  @Watch('width')
  widthChanged() {
    this.myChart && this.option && this.myChart.resize({ width: this.width, height: this.height })
  }

  @Watch('height')
  heightChanged() {
    this.myChart && this.option && this.myChart.resize({ width: this.width, height: this.height })
  }

  @Watch('option')
  optionChanged(option: ECOption) {
    this.myChart && option && this.myChart.setOption(option)
  }

  @Method()
  async setOption(option) {
    this.myChart && option && this.myChart.setOption(option)
  }

  render() {
    return (
      <Host>
        <div id="chart" />
      </Host>
    )
  }
}
