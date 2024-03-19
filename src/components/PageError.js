import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError">❌{props.error.message}😱</div>;
}

export default PageError;
 14 changes: 14 additions & 0 deletions14  