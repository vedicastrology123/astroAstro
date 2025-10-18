import React from 'react';

export default function IonicEndButtons({ children }) {
  return (
    <ion-buttons slot="end">
      {children}
    </ion-buttons>
  );
}