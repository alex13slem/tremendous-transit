import CMS from 'decap-cms-app';
import { decapCollections } from '../../schemas/decap-collections';

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    local_backend: true,
    load_config_file: false,
    media_folder: 'public/images/uploads',
    public_folder: '/images/uploads',
    collections: decapCollections,
  },
});
