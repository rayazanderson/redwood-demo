import BlogPostsCell from 'src/components/BlogPostsCell'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const HomePage = () => {
  return (
    <div>
      <BlogLayout>
        This is the Home page!
        <BlogPostsCell />
      </BlogLayout>
    </div>
  )
}

export default HomePage
