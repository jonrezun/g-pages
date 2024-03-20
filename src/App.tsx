import './App.scss'

const App = () => {

  return (
    <>
        <section className="hero container-fluid">
            <div className="hero__inner container">
                <header className="hero__header">
                    <a href="/" className="hero__logo">REZUN PRODUCTION</a>
                    <button className="hero__burger"></button>
                </header>
                <div className="hero__main">
                    <h1 className="hero__title">Frontend-разработкка для e-commerce!</h1>
                    <p>10 лет помогаю eccome решать бизнес-задачи и достигать новых высот. Маркетинг и технологии в симбиозе.</p>
                </div>
                <ul className="hero__brands">
                    <li className="hero_brand">brand</li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default App
