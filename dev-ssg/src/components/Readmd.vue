<template>
  <!-- <vue3-markdown-it :source='datas.sourced'/> -->
  <div class="md" v-html="datas.axiosMd"></div>
</template>

<script lang="ts">
import axios from "axios";
import { reactive, watchEffect, defineComponent, watch, onMounted } from "vue";

import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItDeflist from "markdown-it-deflist";
import MarkdownItEmoji from "markdown-it-emoji";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItIns from "markdown-it-ins";
import MarkdownItMark from "markdown-it-mark";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";

//设置高亮的样式
// import "highlight.js/styles/monokai.css";
import { CloudyNight } from "@vicons/ionicons5";

export default defineComponent({
  props: {
    path: String,
    anchor: String,
    emoji: String,
    highlight: String,
    tasklists: String,
    toc: String,
  },
  name: "Readmd",
  components: {
    // 'vue3-markdown-it': MarkdownItVue,
  },
  setup(props) {
    const md = new MarkdownIt({
      html: true,
    });
    // 引用各种插件
    md.use(MarkdownItAbbr)
      .use(MarkdownItAnchor, props.anchor)
      .use(MarkdownItDeflist)
      .use(MarkdownItEmoji, props.emoji)
      .use(MarkdownItFootnote)
      .use(MarkdownItHighlightjs, props.highlight) //引用代码高亮插件
      .use(MarkdownItIns)
      .use(MarkdownItMark)
      .use(MarkdownItSub)
      .use(MarkdownItSup)
      .use(MarkdownItTasklists, props.tasklists)
      .use(MarkdownItTOC, props.toc);

    async function readmdinfo(mdpath) {
      if (mdpath == "" || mdpath == null) {
        datas.sourced = "";
      } else {
        await axios.get(mdpath).then((res) => {
          datas.axiosMd = md.render(res.data);
        });
      }
    }
    const datas = reactive({
      sourced: "",
      axiosMd: "",
    });
    watchEffect(() => {
      // console.log(props.path)
      // readmdinfo(props.path);
    });
    watch(
      () => props.path,
      (newVal, oldVal) => {
        console.log("1", newVal);
      }
    );
    onMounted(() => {
      readmdinfo(props.path);
    });
    return {
      readmdinfo,
      datas,
    };
  },
});
</script>

<style>
.md td {
  border: 1px;
  border-style: solid;
  border-color: black;
}
.md th {
  border: 1px;
  border-style: solid;
  border-color: black;
}
.md blockquote {
  margin: 15px 4px;
  padding: 16px 15px;
  color: #444;
  border-left: 3px solid #409eff;
  word-wrap: break-word;
  font-size: 15px;
  line-height: 1.6;
  background-color: #f1f8ff;
  letter-spacing: 0.05em;
}
</style>
