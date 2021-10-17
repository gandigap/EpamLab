import * as AlbumsActionCreators from '../action-creators/AlbumsActionCreators';
import * as PhotosActionCreators from '../action-creators/PhotosActionCreators';
import * as ContentActionCreators from '../action-creators/ContentActionCreators';

export default {
  ...AlbumsActionCreators,
  ...PhotosActionCreators,
  ...ContentActionCreators,
}