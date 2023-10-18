import { lazy } from "react";

import EarthCanvas from "./Earth";
import StarsCanvas from "./Stars/Stars";
import CirclesCanvas from "./Circles";
const BallCanvas = lazy(() => import("./Ball"));

export { EarthCanvas, BallCanvas, StarsCanvas, CirclesCanvas };
