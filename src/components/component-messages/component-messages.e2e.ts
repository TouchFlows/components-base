import { newE2EPage } from '@stencil/core/testing'

describe('component-messages', () => {
	it('renders', async () => {
		const page = await newE2EPage()
		await page.setContent('<component-messages></component-messages>')

		const element = await page.find('component-messages')
		expect(element).toHaveClass('hydrated')
	})
})
