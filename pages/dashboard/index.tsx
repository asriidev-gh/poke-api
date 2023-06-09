import React from 'react'

const index = () => {
  return <div>
		<h1>Hello World</h1>
		<button disabled={true}>
			Hello World
		</button>
		<p data-testid="paragraph-blue" className='blue'>
			This is our paragraph
		</p>
	</div>
}

export default index