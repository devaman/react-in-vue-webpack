<template>
  <div>
    React
    <div id="react"></div>
  </div>
</template>
<script>
import { mount } from "auth/AuthApp";
export default {
  data() {
    return {
      iswatch: true,
    };
  },
  mounted() {
    this.initialPath = this.$route.matched[0].path;
    const { onParentNavigate } = mount(document.getElementById("react"), {
      initialPath: this.initialPath,
      onNavigate: ({ pathname: nextPathname }) => {
        let mext = this.initialPath + nextPathname;
        console.log("route from auth to container", mext, this.$route.path);
        if (this.$route.path !== mext) {
          this.iswatch = false;
          this.$router.push(mext);
        }
      },
      onSignIn: () => {
        console.log("signin");
      },
    });
    this.onParentNavigate = onParentNavigate;
  },
  watch: {
    $route(to, from) {
      let innerRoute = this.getInnerRoute(to.path);
      console.log(
        "watch",
        this.getInnerRoute(to.path),
        this.getInnerRoute(from.path),
        this.iswatch
      );
      if (this.iswatch) {
        if(innerRoute)
        this.onParentNavigate(innerRoute);
        else return true
      } else this.iswatch = true;
    },
  },
  methods: {
    getInnerRoute(path) {
      let inner = path.split(this.initialPath)[1];
      return inner;
    },
  },
};
</script>
