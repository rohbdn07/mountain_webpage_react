import googlemap from '../../../assets/images/google-map.jpg';
import './styles.css';
const GoogleMap = () => {
  return (
    <div className="location_map">
      <h5>Location of our resort</h5>
      <img className="location_googlemap" src={googlemap} />
    </div>
  );
};

export default GoogleMap;
