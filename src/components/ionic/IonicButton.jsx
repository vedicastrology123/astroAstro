import React from 'react';

export default function IonicButton({ children, ...props }) {
  return (
    <ion-button {...props}>
      {children}
    </ion-button>
  );
}