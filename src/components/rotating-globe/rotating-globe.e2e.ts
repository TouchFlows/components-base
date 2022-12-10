import { newE2EPage } from '@stencil/core/testing'

describe('bayer-world', () => {
  it('renders', async () => {
    const page = await newE2EPage()

    await page.setContent('<bayer-world></bayer-world>')
    const element = await page.find('bayer-world')
    expect(element).toHaveClass('hydrated')
  })
})
