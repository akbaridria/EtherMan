<template>
    <div class="card">
      <div class="card-body scrollable">
          <div class="container">
        <center>
        <img src="1inch.png" style="width : 100px; height : 100px;" />
        </center>
        <center>
        <div class="feed-twitter">
        <a class="twitter-timeline" data-width="500" data-height="1000" href="https://twitter.com/1inchbot?ref_src=twsrc%5Etfw">Tweets by 1inchbot</a>
        </div>
        </center>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
        document.head.appendChild(recaptchaScript)
    }
}
</script>
<style scoped>
td {
  vertical-align: middle;
  text-align: center;
}
.scrollable {
  overflow-y: auto;
  max-height: 10000px;
}
.feed-twitter{
    margin : 0
}
</style>