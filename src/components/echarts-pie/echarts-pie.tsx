import { h, Host, Prop, Element, Component, Method, Watch } from '@stencil/core'
import { PieChart } from 'echarts/charts'
import { LegendComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
import { LabelLayout } from 'echarts/features'
import { SVGRenderer } from 'echarts/renderers'

@Component({
  tag: 'echarts-pie',
  styleUrl: 'echarts-pie.css',
  shadow: true,
})
export class EchartsPie {
  myChart: any
  container: HTMLElement

  @Prop({ mutable: true, reflect: true }) width?: number = 350
  @Prop({ mutable: true, reflect: true }) height?: number = 50
  @Prop({ mutable: true, reflect: true }) option: any //ECOption

  @Element() el: HTMLElement

  /*componentWillLoad() {
    // using the SVG renderer
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
      legend: {
        // Try 'horizontal'
        orient: 'vertical',
        right: 10,
        itemWidth: 20,
        top: '20%',
        textStyle: {
          color: 'white',
          fontFamily: 'Verdana'
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'right'
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    }
  }*/

  componentDidLoad() {
    echarts.use([PieChart, LegendComponent, LabelLayout, SVGRenderer])

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
  optionChanged(option: any) {
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
