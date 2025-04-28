{/*}
//import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SnobbarJaffer-123')

    return response.json()
}
*/}

// Github.jsx
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-800 min-h-screen text-white">
            <h1 className="text-4xl font-bold mb-6">GitHub Profile</h1>
            
            <img
                src={data.avatar_url}
                alt="GitHub Profile"
                className="rounded-full shadow-lg mb-4"
                width={200}
                height={200}
            />
            
            <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
            <p className="text-gray-300 mb-4">{data.bio ? data.bio : "No bio available"}</p>

            <div className="flex gap-6 text-lg">
                <p>Followers: <span className="font-semibold">{data.followers}</span></p>
                <p>Following: <span className="font-semibold">{data.following}</span></p>
                <p>Repos: <span className="font-semibold">{data.public_repos}</span></p>
            </div>

            <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
                Visit GitHub
            </a>
        </div>
    );
}

export default Github;

// Correct loader
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SnobbarJaffer-123');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
    }
    return response.json();
}
