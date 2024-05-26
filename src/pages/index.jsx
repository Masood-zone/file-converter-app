import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import { Route } from "react-router-dom";

export const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          lazy={async () => {
            const { default: Home } = await import("./home");
            return { Component: Home };
          }}
        />
        <Route
          path="about"
          lazy={async () => {
            const { default: AboutUs } = await import("./about");
            return { Component: AboutUs };
          }}
        />
      </Route>
      <Route
        path="*"
        lazy={async () => {
          const { default: NotFound } = await import("./notfound/404");
          return { Component: NotFound };
        }}
      />
    </>
  )
);
