// import React from "react";

// type Props = { first: string; last: string };

// const ChildPropsTs = ({ first, last }: Props) => {
//   return (
//     <p>
//       {first} {last}
//     </p>
//   );
// };

// const PropsTs = () => {
//   return (
//     <div>
//       <ChildPropsTs first="guy" last="goldin" />
//     </div>
//   );
// };

// export default PropsTs;

import React from "react";

type Props = { first: string; last: string };

const ChildPropsTs: React.FC<Props> = ({ first, last }) => {
  return (
    <p>
      {first} {last}
    </p>
  );
};

const PropsTs = () => {
  return (
    <div>
      <ChildPropsTs first="guy" last="goldin" />
    </div>
  );
};

export default PropsTs;
