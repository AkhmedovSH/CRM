export default function auth({ next }) {
  if (localStorage.getItem("access_token") == null) {
    return next({
      name: "login"
    });
  }

  return next();
}
