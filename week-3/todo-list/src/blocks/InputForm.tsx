import useRequest from "@/app/hooks/useRequest";
import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";

const InputForm = () => {
  const { handleSubmit, setTitle, setContent } = useRequest();

  return (
    <div className="flex flex-col gap-2">
      <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Todo" onChange={(e) => setContent(e.target.value)} />
      <Button name="Add Todo" onClick={handleSubmit}></Button>
    </div>
  );
};

export default InputForm;
