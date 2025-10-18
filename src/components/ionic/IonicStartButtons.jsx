import React from 'react';

export default function IonicStartButtons({ children }) {
  return (
    <ion-buttons slot="start">
      {children}
    </ion-buttons>
  );
}