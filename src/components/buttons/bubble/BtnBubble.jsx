import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

export const BtnBubble = ({url, texto}) => {
    return (
      <div>
        <Link
          to={url}
          className="bubble-btn relative cursor-pointer | rounded shadow-lg | text-2xl"
        >
          {texto}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
    );
}
