import './App.css';
import Navbar from './Navbar'
import Card from './Card'
import data from './data'

function App() {

  const cards = data.map((item) => {
    return (
      <Card 
        cardImg={item.imageUrl}
        location={item.location}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
