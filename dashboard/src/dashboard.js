import NavigationBar from "./components/navigation-bar/navigation-bar.js";

const navigationItens = [
  {
    url: "/hello-world-page",
    title: "Hello World Page",
  },
  {
    url: "/kiwi-page",
    title: "Kiwi Page",
  },
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItens);

const url = window.location.pathname;

if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === "/kiwi-page") {
  import("KiwiApp/KiwiPage").then((KiwiPageModule) => {
    const KiwiPage = KiwiPageModule.default;
    const kiwiPage = new KiwiPage();
    kiwiPage.render();
  });
}
