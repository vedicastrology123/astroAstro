import React from 'react';

export default function IonicHeader({ children }) {
  return (
    <ion-header client:only="react">
      {children}
    </ion-header>
  );
}