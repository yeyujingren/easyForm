import React, { memo } from 'react';

interface Props {
  [k: string]: any;
}

const RightDetail: React.FC<Props> = (props) => {
  return (
    <div>
      this is RightDetail
    </div>
  );
};

export default memo(RightDetail);
