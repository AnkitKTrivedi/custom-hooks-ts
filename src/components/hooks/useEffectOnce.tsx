import Code from "../../common/code/Code";

const data = `import { EffectCallback, useEffect } from 'react'

export function useEffectOnce(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
}`;
const UseEffectOnce = () => {
  return (
    <div>
      <h4>Hook</h4>
      <div className="bg-body-tertiary">
        <Code data={data} />
      </div>
    </div>
  );
};

export default UseEffectOnce;
