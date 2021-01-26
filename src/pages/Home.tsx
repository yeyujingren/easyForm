import React from 'react';

interface Props {
  [p: string]: string
}

const Home: React.FC<Props> = (prop) => {
  return (
    <div>
      this is home page;
    </div>
  )
}

export default Home;
