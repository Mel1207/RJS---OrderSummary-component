import bgDesktop from './images/pattern-background-desktop.svg'
// import bgMobile from './images/pattern-background-mobile.svg'

const setBg = {
    background: `url(${bgDesktop})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '100vh',
    width: '100%',
}

const styledH1 = {
    color: '#fff'
}

export {setBg, styledH1}