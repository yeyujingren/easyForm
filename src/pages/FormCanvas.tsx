import React, { memo } from 'react';

interface Props {
  [k: string]: any;
}

const FormCanvas: React.FC<Props> = (props) => {
  return (
    <div>
      this is Comtent
    </div>
  );
};

export default memo(FormCanvas);
