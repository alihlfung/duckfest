import ImageCard from '../components/ImageCard.js';
import './App.css';
import useGoogleSpreadsheet from 'use-google-spreadsheet';

const apiKey = process.env.REACT_APP_API_KEY
const shareUrl = process.env.REACT_APP_API_URL


function App() {
  const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, apiKey);
  return isFetching ? (
    <div className="App">
    <h1>CFG FULLSTACK 1 CLASS OF SPRING 2022</h1>
    <span>Loading...</span>
    </div>
    
  ) : rows ? (
    <div className="App">
      <h1>CFG FULLSTACK 1 CLASS OF SPRING 2022</h1>
      <div className="Gallery">
      {rows.map(image => <ImageCard path={image.path} user={image.name} caption={image.caption}/>)}
      </div>
    </div>

  ) : (
    <div className="App">
    <h1>CFG FULLSTACK 1 CLASS OF SPRING 2022</h1>
    <span>No Data</span>
    </div>
  );

}

export default App
