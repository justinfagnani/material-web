/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../icon/icon.js';

import {customElement} from 'lit/decorators.js';
import {ClassInfo} from 'lit/directives/class-map.js';

import {styles} from './lib/filled-tonal-styles.css.js';
import {styles as sharedStyles} from './lib/icon-button-styles.css.js';
import {IconButtonToggle} from './lib/icon-button-toggle.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-tonal-icon-button-toggle': MdFilledTonalIconButtonToggle;
  }
}

/** @soyCompatible */
@customElement('md-filled-tonal-icon-button-toggle')
export class MdFilledTonalIconButtonToggle extends IconButtonToggle {
  static override styles = [sharedStyles, styles];

  /** @soyTemplate */
  protected override getRenderClasses(): ClassInfo {
    return {
      ...super.getRenderClasses(),
      'md3-icon-button--filled-tonal': true,
      'md3-icon-button--toggle-filled-tonal': true,
    };
  }
}
