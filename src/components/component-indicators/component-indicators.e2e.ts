import { newE2EPage } from '@stencil/core/testing'

describe('component-template', () => {
	it('renders', async () => {
		const page = await newE2EPage()
		await page.setContent('<component-template></component-template>')

		const element = await page.find('component-template')
		expect(element).toHaveClass('hydrated')
	})
})
