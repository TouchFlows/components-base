import { newE2EPage } from '@stencil/core/testing'

describe('echarts-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage()

    await page.setContent('<echarts-bar></echarts-bar>')
    const element = await page.find('echarts-bar')
    expect(element).toHaveClass('hydrated')
  })
})
