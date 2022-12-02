import { newSpecPage } from '@stencil/core/testing';
import { ComponentTemplate } from '../component-template';

describe('component-template', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComponentTemplate],
      html: `<component-template></component-template>`,
    });
    expect(page.root).toEqualHtml(`
      <component-template>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-template>
    `);
  });
});
