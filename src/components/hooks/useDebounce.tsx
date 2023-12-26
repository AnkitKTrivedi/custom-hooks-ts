import Code from "../../common/code/Code";

const data = `import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}`;
const UseDebounce = () => {
  return (
    <div>
      <h4>Hook</h4>
      <div className="bg-body-tertiary">
        <Code data={data} />
      </div>
    </div>
  );
};

export default UseDebounce;
