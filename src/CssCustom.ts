import React, {CSSProperties} from 'react';

export interface CssCustom extends CSSProperties {
  '--new-Pos': string;
  '--old-Pos': string;
  '--old-Opacity': string;
  '--new-Opacity': string;
  '--old-Display': string;
  '--new-Display': string;
  '--inner-Display': string;
}