import { useResizeDetector } from "react-resize-detector";

import Plot, { PlotProps } from "@/components/Plot";
import Box from "@mui/material/Box";

export default function PlotWidget(props: PlotProps) {
  const { layout, useResizeHandler, ...rest } = props;
  const { width, height, ref } = useResizeDetector();
  
  const updateLayout = layout
    ? { ...layout, width: width || 0, height: height || 0 }
    : { width: height || 0, height: height || 0 };

  return (
    <Box ref={ref} sx={{ width: "100%", height: "100%" }}>
      <Plot {...rest} layout={updateLayout} />
    </Box>
  );
}
