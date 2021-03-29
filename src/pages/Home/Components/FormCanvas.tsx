import React, { memo } from 'react';
import './style/formCanvas.less';

interface Props {
  [k: string]: any;
}

const FormCanvas: React.FC<Props> = (props) => {
  return (
    <div className="canvaseWapper">
      this is Comtent
    </div>
  );
};

export default memo(FormCanvas);
