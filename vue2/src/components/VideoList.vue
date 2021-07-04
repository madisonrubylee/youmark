<template>
    <div class="video_list">
      <ul>
        <li v-for="(item, idx) in videoList" v-bind:key="idx" >
          <youtube-media 
            :vide-id="item.url"
            :player-width="150"
            :player-height="100"
          />
        </li>
      </ul>
    </div>
</template>




<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VideoType } from '../type/VideoInterface'
import { getIdFromURL } from 'vue-youtube-embed'

@Component 
export default class VideoList extends Vue {
  @Prop() videoList!: VideoType[];

  mounted() {
    if(this.videoList.length > 0) {
      this.videoList.forEach(item => { item.url = getIdFromURL(item.url)})
    }
  }
}

</script>