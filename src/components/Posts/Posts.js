import './Posts.css'

const postsData = [
  {
    title: 'Making a secondBrain Software from scratch',
    date: '20 May 20024',
    tags: ['Systems', 'Design'],
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    title: 'Develping AI Services localy',
    date: '20 Dec 20024',
    tags: ['Systems', 'Design', 'AI', 'Consultancy'],
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  }
]

const Posts = () => {
  const postsSection = document.createElement('section')
  postsSection.className = 'posts'
  postsSection.innerHTML = `
    <h2>Recent posts</h2>
    <div class="post-list">
      ${postsData
        .map(
          (post) => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.date} | ${post.tags.join(', ')}</p>
          <p>${post.description}</p>
        </div>
      `
        )
        .join('')}
    </div>
  `

  return postsSection
}

export default Posts
