import React from 'react';

export default function IonicHeader({ children }) {
  return (
    <ion-header client:load>
      {children}
    </ion-header>
  );
}