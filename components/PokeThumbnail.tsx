import React, { useState } from 'react'

interface PokeThumbnailProps {
  id: string
  name: string
  image: string
  type: string
  stats: any
  height: number
  weight: number
}
  
const PokeThumbnail: React.FC<PokeThumbnailProps> = ({ id, name, image, type, height, weight, stats }) => {
  const [show,setShow] = useState(false);
  
  return (
	<div>
	  <div className={`
	    relative
		flex
		flex-col
		items-center
		justify-center
		text-center
		w-48 m-2 pb-7
		max-w-sm 
		border border-gray-200 
		rounded-lg shadow 
		dark:bg-gray-800 dark:border-gray-700
		bg-gradient-to-t from-white to-blue-300 
		hover:from-blue-500 hover:to-green-500
		${show === true ? 'h-65 pt-10 mt-20 pb-0' : 'h-32 mt-20 pt-16'}
	  `}>
		<div className='absolute bg-white border border-gray-100 rounded-full -top-20'>
		  <img src={image} alt={name} className='w-28 h-32'/>
		</div>
		
		<div className="mt-8 pb-5">
		  <small className='text-gray-800'>#0{id}</small>&nbsp;{name.toUpperCase()}
		  
		  <div className={`mt-1 text-xs text-white bg-blue-300 rounded-full`}>
			{type}
		  </div>

		  <button onClick={()=>setShow(!show)}>
			<span className='text-xs'>
			  { show === true ? "Hide Stats..." : "Show Stats..." }
			</span>
		  </button>

		  <div className={`${show !== true ? 'hidden' : ''} flex flex-wrap flex-col items-start`}>
			<div className='flex flex-wrap flex-col w-full mt-2 mb-5 border border-gray-200 rounded-lg shadow p-2 bg-sky-100'>
			  <div>
				<span className="text-gray text-xs">Height is </span>
				<span className="text-gray text-xs font-medium">{height}</span>
			  </div>
			  <div>
				<span className="text-gray text-xs">Weight is </span>
				<span className="text-gray text-xs font-medium">{weight}</span>
			  </div>
			</div>
			<div>
			  <span className="text-gray p-1 text-xs">{stats[0].stat.name.toUpperCase()}</span>
			  <span className="text-gray p-1 text-xs rounded-lg bg-yellow-100">{stats[0].base_stat}</span>
			</div>
			<div>
			  <span className="text-gray p-1 text-xs">{stats[1].stat.name.toUpperCase()}</span>
			  <span className="text-gray p-1 text-xs rounded-lg bg-lime-300">{stats[1].base_stat}</span>
			</div>
			<div>
			  <span className="text-gray p-1 text-xs">{stats[2].stat.name.toUpperCase()}</span>
			  <span className="text-gray p-1 text-xs rounded-lg bg-emerald-300">{stats[2].base_stat}</span>
			</div>
			<div>
			  <span className="text-gray p-1 text-xs">{stats[3].stat.name.toUpperCase()}</span>
			  <span className="text-gray p-1 text-xs rounded-lg bg-teal-200">{stats[3].base_stat}</span>
			</div>
			<div>
			  <span className="text-gray p-1 text-xs">{stats[4].stat.name.toUpperCase()}</span>
			  <span className="text-gray p-1 text-xs rounded-lg bg-cyan-300">{stats[4].base_stat}</span>
			</div>
			<div>
			  <span className="text-gray p-1 text-xs">{stats[5].stat.name.toUpperCase()}</span>
			  <span className="text-gray p-1 text-xs rounded-lg bg-cyan-300">{stats[5].base_stat}</span>
			</div>
		  </div>
		</div>  
      </div>
	</div>
  )
}

export default PokeThumbnail;