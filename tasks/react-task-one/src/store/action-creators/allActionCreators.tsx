import * as AlbumsActionCreators from './AlbumsActionCreators';
import * as PhotosActionCreators from './PhotosActionCreators';
import * as ContentActionCreators from './ContentActionCreators';

const allActionCreators = {
  ...AlbumsActionCreators,
  ...PhotosActionCreators,
  ...ContentActionCreators,
}
export default allActionCreators;