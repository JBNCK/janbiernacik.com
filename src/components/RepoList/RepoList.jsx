import './RepoList.css';
import isGerman from "../../scripts/is-german";
import { useEffect, useState } from 'react';
const ghPat = import.meta.env.VITE_GITHUB_PAT;

function RepoList() {
    const [repos, setRepos] = useState([]);
    const componentContent = isGerman() ? {
        componentTitle: "Projekte",
        githubButtonText: "GitHub-Profil",
        biernacikDevButtonText: "biernacik.dev"
    } : {
        componentTitle: "Projects",
        githubButtonText: "GitHub Profile",
        biernacikDevButtonText: "biernacik.dev"
    }

    useEffect(() => {
        fetch('https://api.github.com/users/janjbnck/repos', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setRepos(data))
    }, []);

    return (
        <div id='repo-list' className='main-section'>
            <h3 className='main-section-subtitle'>{componentContent.componentTitle}</h3>
            {repos.map(repo => (
                <a key={repo.id} className="repo-item" href={repo.html_url}>
                    <h3 className='repo-name'>{repo.name}</h3>
                    <p>{repo.description || 'No description'}</p>
                </a>
            ))}
            <a href='https://github.com/janjbnck' className='link block'><i class="bi bi-arrow-right"></i> {componentContent.githubButtonText}</a>
            <a href='https://biernacik.dev' className='link block'><i class="bi bi-arrow-right"></i> {componentContent.biernacikDevButtonText}</a>
        </div>
    );
}

export default RepoList;