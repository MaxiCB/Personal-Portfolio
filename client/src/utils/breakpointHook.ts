import { useState, useEffect } from "react";
import { Grid } from "antd";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";

const { useBreakpoint } = Grid;

/**
 * useBreakpointHook - Returns the current screen's various breakpoints
 * @return {<Record<Breakpoint, boolean>>}      The varying screen sizes of the current device
 */
const useBreakpointHook = () => {
    // Define the useState that will be updated, and returned
  const [currScreen, setCurrScreen] = useState<Partial<Record<Breakpoint, boolean>>>();

    // During load set the CurrentScreen sizes to values returned by useBreakpoint
  useEffect(() => {
    setCurrScreen(useBreakpoint());
  }, []);
    // Return the updated screen sizes
  return currScreen;
};

export default useBreakpointHook;
