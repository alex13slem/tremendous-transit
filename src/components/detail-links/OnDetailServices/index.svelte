<script lang="ts">
  import { beforeUpdate } from 'svelte';
  import LinkToDetailPage from '../../ui/LinkToDetailPage.svelte';
  import { urlQuery } from '@sveu/browser';
  const query = urlQuery('history');
  let articleSlug: string;
  beforeUpdate(() => {
    articleSlug = $query['development-slug'];
  });
</script>

<LinkToDetailPage to={`/development/${articleSlug}`} />
