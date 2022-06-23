import { Profiler, ProfilerOnRenderCallback, ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
}

const onRender: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  console.log(`
    id: ${id}
    phase: ${phase}
    actualDuration: ${actualDuration}
    baseDuration: ${baseDuration}
  `);
};

export const MyProfiler = ({ id, children }: Props) => (
  <Profiler id={id} onRender={onRender}>
    {children}
  </Profiler>
);
