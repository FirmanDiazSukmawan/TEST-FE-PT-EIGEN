import routes from "../routes"


describe("Router Configuration", () => {
  it("should have an index route", () => {
    const indexRoute = routes.find((r) => r.index);
    expect(indexRoute).toBeDefined();
    expect(indexRoute?.file).toBe("routes/list.tsx");
  });

  it("should have a detail route with slug param", () => {
    const detailRoute = routes.find((r) => r.path === "detail/:slug");
    expect(detailRoute).toBeDefined();
    expect(detailRoute?.file).toBe("routes/detail.tsx");
  });

  it("should satisfy RouteConfig type", () => {
    expect(Array.isArray(routes)).toBe(true);
  });
});
