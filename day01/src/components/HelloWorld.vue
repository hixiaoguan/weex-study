<template>
  <div class="helloworld">
    <div class="box1">
      <text>111</text>
    </div>
    <div class="box2">
      <div class="box3">33</div>
      <div class="box4">44</div>
      <image :src="logo" class="box2img"></image>
    </div>
  </div>
</template>
<style>
.helloworld{
  position: relative;
}

.box1{
  width:300px;
  height:300px;
  border-width: 5px;
  border-color:yellow;
  border-style: solid;
  background-color: red;
  left:0;
  top: 0;
  position: absolute;
  background-image:linear-gradient(to top,red,white);
}

.box2{
  width:300px;
  height:300px;
  background-color: greenyellow;
  left:0;
  top: 190px;
  position: absolute;
  flex-direction: row;
}

.box2img{
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 20px;
}

.box3{
  width:100px;
  height:100px;
  background-color: blue;
}

.box4{
  width:100px;
  height:100px;
  border-bottom-left-radius: 20px;
  background-color:chocolate;
}

</style>

<script>
export default {
  data () {
    return {
      logo: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2826937859,1390624465&fm=173&app=49&f=JPEG?w=636&h=358&s=AF33C4045347115DCA5B5E8A03007088'
    }
  }
}
</script>



