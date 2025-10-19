import React from 'react';

export default function IonToolBar({ children, ...props }) {
  return (
    <ion-tool-bar client:only="react" color="secondary" {...props}>
      {children}
    </ion-tool-bar>
  );
}