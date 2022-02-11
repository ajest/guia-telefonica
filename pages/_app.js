import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (<div className='main-container'>
      <header>
        <h1 className={'title'}>
          电话目录 Guía telefónica
        </h1>
      </header>
      <Component {...pageProps} />
    </div>)
}

export default MyApp
