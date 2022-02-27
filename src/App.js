import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import ItemListContainer from './components/ItemListContainer'

const App = () => {   

    return (
        <>
            <Header cantidad={4}/>
            <Main nombre='Felipe' edad={19}/>
            <Footer/>
        </>
    )
}

export default App