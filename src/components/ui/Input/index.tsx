import React, {
  HTMLInputTypeAttribute,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  forwardRef,
  Ref,
} from "react";

type InputProps = {
  type: HTMLInputTypeAttribute;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  forwardRef: React.RefObject<HTMLInputElement>;
};

type InputRef = {
  focus: () => void;
};

const Input = forwardRef(
  ({ type, onChange }: InputProps, ref: Ref<InputRef>) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));

    useLayoutEffect(() => {
      console.log("Component mounted");
    }, []);

    return <input type={type} onChange={onChange} ref={inputRef} />;
  }
);

export default Input;
