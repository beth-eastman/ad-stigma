import Video from '../../components/AdApp/Video';
import {VideoInterface} from '../../res/data/videos';
import {connect} from 'react-redux';

const stateToProps = (state, ownProps): {video: VideoInterface, screenWidth?: number, width: string} => {

  const getWidth = (width) => {
    if (!width) {
      return '100%';
    } else if (width > 1200) {
      return '1200';
    } else {
      return '100%';
    }
  }

  return {
    video: state.videos[ownProps.match.params.id],
    screenWidth: 500,
    width: getWidth(ownProps.appPage.screen.width)
  }
}
const dispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
export default connect(stateToProps,dispatchToProps)

(Video);
