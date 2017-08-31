import VideosList from '../../components/AdApp/VideosList';
import {connect} from 'react-redux';

const getCols = (screen) => {
  const width = screen.width;
  if (!width) {
    return 1;
  }
  if (width > 1200) {
    return 4;
  }
  if (width > 900) {
    return 3;
  }
  if (width > 600) {
    return 2;
  }
  return 1
}

const stateToProps = (state,ownProps) => {

  return {
    videos: state.videoIds.map(id => state.videos[id]),
    cols: getCols(ownProps.appPage.screen)
  }
}
const dispatchToProps = (dispatch,ownProps) => {

  return {
    onClick: (item: {id: number}) => {
      ownProps.history.push(ownProps.basePath + '/' + item.id);
    }
  }
}
export default connect(stateToProps,dispatchToProps)

(VideosList);
