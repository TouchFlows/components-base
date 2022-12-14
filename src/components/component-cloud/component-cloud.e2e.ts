import { newE2EPage } from '@stencil/core/testing'

describe('component-cloud', () => {
	it('renders', async () => {
		const page = await newE2EPage()
		await page.setContent('<component-cloud></component-cloud>')

		const element = await page.find('component-cloud')
		expect(element).toHaveClass('hydrated')
	})
})
