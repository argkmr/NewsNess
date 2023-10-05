import '@styles/globals.css'
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
  title: 'NewsNess',
  description: 'One Shot Place for all your Headlines!',
}

const RootLayout = ({ children }) => {
 return (
    <html lang="en" className="htmlSmooth">
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>
        <main className="app"  >
          <Nav/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}

export default RootLayout;
