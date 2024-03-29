// halaman untk merender 1 buah postingan blog
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default function Template({data}) {
	const post = data.markdownRemark

	return (
  <Layout>
    <SEO title={post.frontmatter.title} description="blog-post" lang="id" />
		<div>
			<Link to="/blog">Go Back</Link>
			<hr />
			<h1>{post.frontmatter.title}</h1>
			<h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
			<div dangerouslySetInnerHTML={{__html: post.html}} />
		</div>
  </Layout>
	)	
}

// fecthing data menggunakan graphql untuk menampilkan 1 buah post
export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: {path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
				author
				date
			}
		}
	}
`