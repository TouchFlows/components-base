import { newE2EPage } from '@stencil/core/testing'

describe('echarts-pie', () => {
  it('renders', async () => {
    const page = await newE2EPage()

    await page.setContent('<echarts-pie></echarts-pie>')
    const element = await page.find('echarts-pie')
    expect(element).toHaveClass('hydrated')
  })
})
