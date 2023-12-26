import Code from "../../common/code/Code";

const data = `import { Dispatch, SetStateAction, useCallback, useState } from 'react'

interface UseBooleanOutput {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

export function useBoolean(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = useState(!!defaultValue)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue(x => !x), [])

  return { value, setValue, setTrue, setFalse, toggle }
}`;

const UseBoolean = () => {
  return (
    <div>
      <h4>Hook</h4>
      <div className="bg-body-tertiary">
        <Code data={data} />
      </div>
    </div>
  );
};

export default UseBoolean;
