import { newSpecPage } from '@stencil/core/testing';
import { BlButton } from './rz-button-component';

describe('rz-button-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BlButton],
      html: '<rz-button-component></rz-button-component>',
    });
    expect(root).toEqualHtml(`
      <button-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </button-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [BlButton],
      html: `<button-component first="Stencil" last="'Don't call me a framework' JS"></button-component>`,
    });
    expect(root).toEqualHtml(`
      <rz-button-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </rz-button-component>
    `);
  });
});
