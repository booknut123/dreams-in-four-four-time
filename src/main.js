import { mount } from "svelte";
import "./app.css";
// @ts-ignore
import App from "./App.svelte";

// Using Lenis for smooth scroll
import Lenis from "lenis";

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Mount Svelte app
const app = mount(App, {
  target: document.getElementById("app"),
});

export default app;