import { newE2EPage } from '@stencil/core/testing'

describe('echarts-line', () => {
  it('renders', async () => {
    const page = await newE2EPage()

    await page.setContent('<echarts-line></echarts-line>')
    const element = await page.find('echarts-line')
    expect(element).toHaveClass('hydrated')
  })
})
