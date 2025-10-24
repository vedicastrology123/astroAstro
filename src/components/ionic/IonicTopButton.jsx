import React from 'react';

export default function IonicTopButton({ children }) {
  return (
    <ion-button id="back-to-top" aria-label="Back to Top" client:load >
      {children}
    </ion-button>
  );
}