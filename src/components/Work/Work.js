import './Work.css'
const worksData = [
  {
    title: 'BI Dashboards',
    year: 2020,
    category: 'Dashboard',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    image:
      'https://www.qalyptus.com/blog/wp-content/uploads/2020/05/qlik-sense-interactivity.png'
  },
  {
    title: 'Excepcional Landscapes',
    year: 2018,
    category: 'Photography',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    image: 'https://www.originaltravel.co.uk/travel-blog/ShowPhoto/4103/0'
  },
  {
    title: 'Gym development strategy',
    year: 2018,
    category: 'Byusiness',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    image:
      'https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K'
  }
]

const Works = () => {
  const worksSection = document.createElement('section')
  worksSection.className = 'works'
  worksSection.innerHTML = `
  <h2>Featured works</h2>
  <div class="work-list">
    ${worksData
      .map(
        (work) => `
      <div class="work">
        <img src="${work.image}" alt="${work.title}">
        <div>
          <h3>${work.title}</h3>
          <p>${work.year} | ${work.category}</p>
          <p>${work.description}</p>
        </div>
      </div>
    `
      )
      .join('')}
  </div>
`
  return worksSection
}
export default Works
