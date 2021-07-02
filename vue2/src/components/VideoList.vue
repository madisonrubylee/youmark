<template>
    <div class="video_list">
      <ul>
        <li v-for="(item, idx) in videoList" v-bind:key="idx" >
          {{ item.url }}
        </li>
      </ul>
    </div>
</template>







<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VideoType } from '../type/VideoInterface'


@Component 
export default class VideoList extends Vue {
  @Prop() videoList!: VideoType[];

}

</script>