import './Hero.css'

const Hero = () => {
  const hero = document.createElement('section')
  hero.className = 'hero'

  hero.innerHTML = `
   <div>
      <h1>Hi, I am Vincent, Business Developer Especialist</h1>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
      <button>Take a look to my work</button>
    </div>
     <div class="hero-image">
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="Profile Picture" class="profile-pic" />
      </div>
    </div>`

  return hero
}

export default Hero
