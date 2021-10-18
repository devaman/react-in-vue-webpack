<template>
<div style="display:flex; flex-direction:column; height:60vh; justify-content: space-between;">
<nav>
    <ul>
        <li><router-link to="/" class="nav-link">Go to Vue pages</router-link></li>
        <li><router-link to="/react" class="nav-link">Go to react pages</router-link></li>
    </ul>
</nav>
 <router-view/>
</div>
</template>
<script>
export default {
}
</script>
<style >
html, body, div, p, ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}

/* This class is applied to the containing div <div class="nav"> and is used to set the background color and height of the navbar */
nav {
  background: #000;
  height: 60px; /* set same as height & line-height below */
}

/* This rule centers thenav items verticaly in the bar with the height and line height properties. Spacing between thenav items is controlled by setting right and left padding.  */
nav li {
  display: inline-block;
  list-style: none;
  /* "0" sets top and bottom padding to none */
}

/* :hover allows you change the background color of thenav items when you mouse over them. Play around with the transition value to change the speed of the hover transition. */
nav li:hover {
  background: red;
  transition: background .3s;
}

/* This rule is applied to the link <a> tag. It lets you turn off the link underline and set the link text color. */
.nav-link {
  color: #fff;
  text-decoration: none;
  display: block;
  height: 100%; /* should be the same as line-height */
  line-height: 60px; /* should be the same as height */
  padding: 0 40px; 
}
</style>