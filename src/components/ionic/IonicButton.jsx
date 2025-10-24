import React from 'react';

export default function IonicButton({ children, ...props }) {
  return (
    <ion-button {...props}>
          {/* <ion-button client:only="react" {...props}></ion-button> */}
      {children}
    </ion-button>
  );
}