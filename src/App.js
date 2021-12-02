import './App.css';
import AppRoutes from './routes';
import SEO from './seo/landingPage';

const App = () => {
  return (
    <div className="App">
      <SEO title="Mountain ski resort" description="Ski resort in the north of the Finland " />
      <AppRoutes />
    </div>
  );
};

export default App;
