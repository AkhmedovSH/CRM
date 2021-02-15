export default function guest({ next }) {
  if (localStorage.getItem("access_token") != null) {
    return next({
      name: "modules"
    });
  }

  return next();
}
