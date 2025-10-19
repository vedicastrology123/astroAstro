import React from 'react';

export default function IonicButton({ children, ...props }) {
  return (
    <ion-button client:only="react" {...props}>
      {children}
    </ion-button>
  );
}