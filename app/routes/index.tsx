import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";

import { Image } from "../components";
import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎" };
};

const HERO_URL =
  "https://res.cloudinary.com/hova-labs/image/upload/hova-labs/Earth_ssszth.jpg";

export default function Index() {
  let data = useRouteData();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome to Remix!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <Image
        src={HERO_URL}
        style={{ width: "100%", height: "auto" }}
        alt="rocket cat"
      />
      <p>Message from the loader: {data.message}</p>
    </div>
  );
}
