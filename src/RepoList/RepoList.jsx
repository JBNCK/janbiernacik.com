import './RepoList.css';
import { useEffect, useState } from 'react';
const ghPat = import.meta.env.VITE_GITHUB_PAT;

function RepoList() {
    const [repos, setRepos] = useState([]);
    const projectTitle = navigator.language === "de-DE" ? "Projekte" : "Projects";

    useEffect(() => {
        fetch('https://api.github.com/users/JBNCK/repos', {
            method: 'GET',
            /* headers: {
                'Authorization': `Bearer ${ghPat}`
            }, */
        })
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error("Couldn't fetch repos"));
    }, []);

    return (
        <div id='repo-list' className='main-section'>
            {repos.map(repo => (
                <a key={repo.id} className="repo-item" href={repo.html_url}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description || 'No description'}</p>
                </a>
            ))}
        </div>
    );
}

// <h3 className='main-section-title'>{projectTitle}</h3>

export default RepoList;