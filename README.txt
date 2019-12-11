Gatsby adalah Static site generator untuk React.

Contoh kasusnya kita akan membuat blog ^_^.

Query GraphQL untuk mengefatch data blog: 

		{
		 allMarkdownRemark {
		 	edges {
		    node {
		      frontmatter {
		       title
		        path
		        author
		        date
		      }
		      excerpt
		    }
		  } 	
		 } 
		} 
