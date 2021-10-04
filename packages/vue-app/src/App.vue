<template>
<div style="display:flex; flex-direction:column; height:60vh; justify-content: space-between;">
 <router-view/>
<div>
 <router-link to="/" style="">Go to Vue pages</router-link>
 <router-link to="/react">Go to react pages</router-link>
</div>
</div>
</template>
<script>
</script>