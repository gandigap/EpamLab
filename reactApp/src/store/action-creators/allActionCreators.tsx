import * as AlbumsActionCreators from './AlbumsActionCreators';
import * as PhotosActionCreators from './PhotosActionCreators';
import * as UsersActionCreators from './UsersActionCreators';

const allActionCreators = {
  ...AlbumsActionCreators,
  ...PhotosActionCreators,
  ...UsersActionCreators,
}
export default allActionCreators;