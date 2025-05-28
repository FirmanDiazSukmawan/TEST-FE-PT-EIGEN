// src/routerConfig.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes = [
  index("routes/list.tsx"),
  route("detail/:slug", "routes/detail.tsx"),
] satisfies RouteConfig;

export default routes;
