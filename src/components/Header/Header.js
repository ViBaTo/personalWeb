import './Header.css'

const Header = () => {
  const header = document.createElement('header')
  header.className = 'header'

  header.innerHTML = `
      <header>
      <nav>
        <ul>
          <li><a href="#">Works</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>`

  return header
}

export default Header
