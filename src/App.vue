<template>
<div>
<p>server status:{{status}}</p>
<hr>
<button @click="changeStatus">Changestatus</button>
</div>
</template>  

<script>
export default {
  data:function(){
    return{
      status:'critical'
    }
    },
    methods:{
      changeStatus(){
        this.status='Normal';
      }

    }
 
}
</script>

<style>

</style>