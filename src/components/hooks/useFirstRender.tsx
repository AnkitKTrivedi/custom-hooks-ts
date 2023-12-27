import Code from "../../common/code/Code";

const data = `export function useIsFirstRender(): boolean {
      const isFirst = useRef(true)
    
      if (isFirst.current) {
        isFirst.current = false
    
        return true
      }
    
      return isFirst.current
    }`;

const UseFirstRender = () => {
  return (
    <div>
      <h4>Hook</h4>
      <div className="bg-body-tertiary">
        <Code data={data} />
      </div>
    </div>
  );
};

export default UseFirstRender;
