import NotificationButton from "./components/NotificationButton"
import Header from "./components/NotificationButton/Header"
import SalesCard from "./components/NotificationButton/SalesCard"



function App() {
  return (<>
    <Header />
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard/>
        </div>
      </section>

    </main>

  </>
  )
}

export default App
