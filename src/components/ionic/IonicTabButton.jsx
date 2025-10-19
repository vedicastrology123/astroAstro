import React from 'react';

export default function IonicTabButton({ ...props }) {
  return (
    <ion-tab-button client:only="react" { ...props }>
      {/* {children} */}
    </ion-tab-button>
  );
}