import { newE2EPage } from '@stencil/core/testing'

describe('slow-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage()

    await page.setContent('<slow-counter></slow-counter>')
    const element = await page.find('slow-counter')
    expect(element).toHaveClass('hydrated')
  })
})
