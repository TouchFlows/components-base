import { Component, Element, h, Host, Method, Prop, Watch } from '@stencil/core'
import { BarChart, BarSeriesOption } from 'echarts/charts'
import { DatasetComponent, DatasetComponentOption, GridComponent, GridComponentOption } from 'echarts/components'
import * as echarts from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'

type ECOption = echarts.ComposeOption<BarSeriesOption | DatasetComponentOption | GridComponentOption>

@Component({
  tag: 'echarts-bar',
  styleUrl: 'echarts-bar.css',
  shadow: true,
})
export class EchartsBar {
  myChart: any
  container: HTMLElement

  @Prop({ mutable: true, reflect: true }) width?: number = 350
  @Prop({ mutable: true, reflect: true }) height?: number = 50
  @Prop({ mutable: true, reflect: true }) option: any //ECOption

  @Element() el: HTMLElement

  /*componentWillLoad() {
    // using the SVG renderer
    const color = [
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
    ]

    this.option = {
      dataset: {
        source: [
          ['score', 'amount', 'product'],
          [89.3, 58212, 'Matcha Latte'],
          [57.1, 78254, 'Milk Tea'],
          [74.4, 41032, 'Cheese Cocoa'],
          [50.1, 12755, 'Cheese Brownie'],
          [89.7, 20145, 'Matcha Cocoa'],
          [68.1, 79146, 'Tea'],
          [19.6, 91852, 'Orange Juice'],
          [10.6, 101852, 'Lemon Juice'],
          [32.7, 20112, 'Walnut Brownie']
        ]
      },
      textStyle: {
        color: 'white',
        fontFamily: 'Verdana'
      },
      grid: { containLabel: false },
      xAxis: { 
        name: 'amount'
      },
      yAxis: {
        show: true,
        type: 'category',
        axisTick: {
          show: false
        }
        
      },
      series: [
        {
          label: {
            show: true,
            color: 'white'
          },
          itemStyle: {
            color: function (param) {
              return color[param.dataIndex] || '#5470c6';
            }
          },
          type: 'bar',
          encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product'
          }
        }
      ]
    }
  }*/

  componentDidLoad() {
    echarts.use([DatasetComponent, BarChart, GridComponent, SVGRenderer])

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
