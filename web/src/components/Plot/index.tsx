import React from "react";
import Plotly, { PlotParams } from "react-plotly.js";
import { Frame, Data } from "plotly.js";

export type PlotProps = {
} & PlotParams;

type PlotState = {
  data: Data[];
  layout: any;
  config: any;
  frames: Frame[];
};

class Plot extends React.Component<PlotProps, PlotState> {
  public static defaultProps: PlotProps = {
    data: [],
    layout: {},
    config: {},
    frames: [],
  };

  constructor(props: PlotProps) {
    super(props);
    const { data, layout, config, frames } = props;

    this.state = {
      data,
      layout,
      config,
      frames,
    };
  }

  static getDerivedStateFromProps(nextProps: PlotProps, prevState: PlotState) {
    const { data, layout, config } = nextProps;
    return { data, layout, config };
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
  // shouldComponentUpdate(nextProps: PlotProps, nextState: PlotState) {
  //   return true;
  // }
  // componentDidUpdate(prevProps: PlotProps, prevState: PlotState) {
  //   console.log("componentDidUpdate");
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }
  
  render() {
    return (
      <Plotly
        {...this.props}
        data={this.state.data}
        layout={this.state.layout}
        frames={this.state.frames}
        config={this.state.config}
        onInitialized={(figure) => this.setState(figure)}
        onUpdate={(figure) => this.setState(figure)}
      />
    );
  }
}

export default Plot;
