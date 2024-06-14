import React from "react";

type Props = {
  name: string;
  onClick: () => void;
  className?: string;
};

const Button = (props: Props) => {
  return (
    <button className="border p-2 rounded border-black" {...props}>
      {props.name}
    </button>
  );
};

export default Button;
