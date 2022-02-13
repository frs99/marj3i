<template>
  <section class="all-text">
    <Title info="عنوان" />
    <Text info="مجرد نص" />
    <Note info="مجرد نص" />
    <Alert info="مجرد نص" />
    <Taglink title="مجرد نص" info="مجرد نص" link="/" button="مجرد نص" />
  </section>
</template>

<script>
import Title from '../../blog/TitleBlog.vue';
import Text from '../../blog/TextBlog.vue';
import Note from '../../blog/Note.vue';
import Alert from '../../blog/Alert.vue';
import Taglink from '../../blog/TagLink.vue';
export default {
  name:'BlogText',
  components:{
    Title,
    Text,
    Note,
    Alert,
    Taglink,
  }
}
</script>