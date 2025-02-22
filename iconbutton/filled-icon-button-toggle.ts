/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../icon/icon.js';

import {customElement} from 'lit/decorators.js';
import {ClassInfo} from 'lit/directives/class-map.js';

import {styles} from './lib/filled-styles.css.js';
import {styles as sharedStyles} from './lib/icon-button-styles.css.js';
import {IconButtonToggle} from './lib/icon-button-toggle.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-icon-button-toggle': MdFilledIconButtonToggle;
  }
}

/** @soyCompatible */
@customElement('md-filled-icon-button-toggle')
export class MdFilledIconButtonToggle extends IconButtonToggle {
  static override styles = [sharedStyles, styles];

  /** @soyTemplate */
  protected override getRenderClasses(): ClassInfo {
    return {
      ...super.getRenderClasses(),
      'md3-icon-button--filled': true,
      'md3-icon-button--toggle-filled': true,
    };
  }
}
