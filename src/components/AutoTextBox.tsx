import React, { useEffect } from "react";

interface MagicTextBoxProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
}

const ReactMagicTextBox = (props: MagicTextBoxProps) => {
  const textAreaRef = React.createRef<HTMLTextAreaElement>();
  const [value, setValue] = React.useState(props.value);

  const autoAlignment = () => {
    const node = textAreaRef?.current;

    if (node) {
      node.style.height = "auto";
      node.style.height = node.scrollHeight + "px";
    }
  };

  useEffect(() => {
    autoAlignment();
  });

  const inputDataChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    autoAlignment();
    const currentValue = event.target.value;

    setValue(currentValue);

    if (props.onChange) {
      props.onChange(currentValue);
    }
  };

  return (
    <textarea
      className="input-text"
      ref={textAreaRef}
      onChange={inputDataChange}
      rows={1}
      placeholder={props.placeholder}
      value={value}
    />
  );
};

export default ReactMagicTextBox;
