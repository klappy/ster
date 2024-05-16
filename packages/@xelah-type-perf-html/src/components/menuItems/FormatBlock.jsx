import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from "prop-types";

import { formatBlock, canFormatBlock } from '../../actions/formatBlock'

export default function FormatBlock(formatBlockProps) {
  const {label, subtype, sequence} = formatBlockProps;

  const [show, setShow] = useState( canFormatBlock( { sequence } ) );
  const handleSelectionChangeEvent = useCallback(() => {
    setShow( canFormatBlock( { sequence }) );
  }, [sequence]);

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChangeEvent);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChangeEvent);
    };
  }, [handleSelectionChangeEvent])

  const onClick = (event) => {
    event.preventDefault();
    formatBlock({ subtype, sequence });
  }
  return (
    show ?
      <button
        style={{display:'block'}}
        className="menuItem"
        onMouseDown={onClick}
      >
        {label}
      </button>
      : ''
  )
}

FormatBlock.propTypes = {
  label: PropTypes.string,
  subtype: PropTypes.string,
  sequence: PropTypes.string,
};
