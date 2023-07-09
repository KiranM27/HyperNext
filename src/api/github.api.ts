import { useQuery } from '@tanstack/react-query';

export const fetchGithubUser = async () => {
  const res = await fetch('https://api.github.com/users/kiranm27');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const useGithubUser = () => {
  return useQuery(['githubUser'], fetchGithubUser);
};
