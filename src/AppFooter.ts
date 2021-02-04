import { html, css } from 'lit-element';

import { YoloLitElement } from './YoloLitElement.js';

export class AppFooter extends YoloLitElement {

  static styles = css`
  `;

  render() {
    return html`
      <p class="ml-5 items-center 2xl">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('app-footer', AppFooter);
