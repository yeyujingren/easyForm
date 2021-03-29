import React, { memo } from 'react';

interface Props {
  [k: string]: any;
}

const LeftNav: React.FC<Props> = (props) => {
  return (
    <div>
      this is Left nav
    </div>
  );
};

export default memo(LeftNav);
