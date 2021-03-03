import { Employee } from "api/employees";
import {
  useContext,
  useState,
  createContext,
  SetStateAction,
  ReactNode,
  Dispatch,
} from "react";

export type Compare = Array<Partial<Employee>>;
type ContextProps = Compare;
type ProviderProps = {
  children: ReactNode;
  compare?: Compare;
};

const defualtValue: Compare = [];

// initialize compare context
const CompareContextValue = createContext<ContextProps>(defualtValue);
const CompareContextSetState = createContext<
  Dispatch<SetStateAction<ContextProps>>
>(() => null);

/**
 * @provider CompareProvider
 * @summary compare provider use this at top of the react tree to get compare data on every level
 * @param {ReactNode} children
 */
function CompareProvider({ children }: ProviderProps) {
  const [compare, setCompare] = useState<ContextProps>(defualtValue);

  return (
    <CompareContextValue.Provider value={compare}>
      <CompareContextSetState.Provider value={setCompare}>
        {children}
      </CompareContextSetState.Provider>
    </CompareContextValue.Provider>
  );
}

/**
 * @function useCompareState
 * @summary returns compare state and compare set state just like out trusty useState
 * @returns {CompareComparesStateType} tuple of compare and setCompare
 */
export type UseCompareStateType = [
  Partial<Compare>,
  Dispatch<SetStateAction<Compare>>
];
function useCompareState() {
  const compare = useContext(CompareContextValue);
  const setCompare = useContext(CompareContextSetState);
  const state: UseCompareStateType = [compare, setCompare];
  return state;
}

/**
 * @function useCompareValue
 * @summary returns compare state as partial
 * @returns {Partial<compare>} compare
 */
function useCompareValue(): Partial<Compare> {
  const compare = useContext(CompareContextValue);
  return compare;
}

/**
 * @function useCompareSetState
 * @summary returns compare set state
 * @returns {SetStateAction<compare>} setCompare
 */
function useCompareSetState(): Dispatch<SetStateAction<Compare>> {
  const setCompare = useContext(CompareContextSetState);
  return setCompare;
}

export {
  CompareProvider,
  useCompareState,
  useCompareValue,
  useCompareSetState,
};
