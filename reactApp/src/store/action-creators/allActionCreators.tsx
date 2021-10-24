import * as AlbumsActionCreators from './AlbumsActionCreators';
import * as PhotosActionCreators from './PhotosActionCreators';

const allActionCreators = {
  ...AlbumsActionCreators,
  ...PhotosActionCreators,
}
export default allActionCreators;