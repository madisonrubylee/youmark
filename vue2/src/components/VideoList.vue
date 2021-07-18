<template>
    <div class="video_list">
      <h2 class="discoverTitle">
        <a class="rowTitle">{{videoList.codeDesc}}</a>
      </h2>
      <ul>
        <li v-for="(item, idx) in videoList.url" v-bind:key="idx" 
          :class=" idx === 0 ? 'first' : ''">
          <youtube 
            :video-id="item | url" 
            :player-width="300"
            :player-height="150"/>
          <!-- <youtube-iframe
            :vide-id="item.url"
            :player-width="150"
            :player-height="100"
          /> -->
        </li>
      </ul>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VideoType } from '../type/VideoInterface'
import { getIdFromURL } from 'vue-youtube-embed'

@Component({
  filters: {
    url: ((val: string) => getIdFromURL(val))
  }
})
export default class VideoList extends Vue {
  @Prop() videoList!: VideoType[];

  // mounted() {
  //   if(this.videoList.length > 0) {
  //     this.videoList.forEach(item => { item.url = getIdFromURL(item.url)})
  //   }
  // }
}

</script>