import React from "react";

type Props = {
  placeholder: string;
  onChange: (e: any) => void;
};

const Input = (props: Props) => {
  return (
    <input
      type="text"
      className="border rounded-lg border-black p-2"
      {...props}
    />
  );
};

export default Input;
