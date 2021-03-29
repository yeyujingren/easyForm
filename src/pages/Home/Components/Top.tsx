import React, { memo } from 'react';

interface Props {
  [k: string]: any;
}

const TopBar: React.FC<Props> = (props) => {
  return (
    <div>
      this is Top Bar
    </div>
  );
};

export default memo(TopBar);

