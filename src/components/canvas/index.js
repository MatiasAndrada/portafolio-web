import { lazy } from "react";

import EarthCanvas from "./Earth";
const  BallCanvas= lazy(() => import("./Ball"));
import StarsCanvas from "./Stars/Stars";
import CirclesCanvas from "./Circles";

export  {
  EarthCanvas,
    BallCanvas,
  StarsCanvas,
  CirclesCanvas,
};