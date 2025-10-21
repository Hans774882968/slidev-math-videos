const GITHUB_PAGE_BASE = '/slidev-math-videos/';

export function getWebsiteBasePath() {
  const isGitHubPages = import.meta.env.VITE_DEPLOY_TARGET === 'github-pages';
  const basePath = isGitHubPages ? GITHUB_PAGE_BASE : '/';
  return basePath;
}

export function redirectToDestination() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirectPath = urlParams.get('redirect');
  if (!redirectPath) {
    return;
  }
  // 移除重定向参数
  const cleanPath = window.location.pathname + window.location.search.replace(/\?redirect=.*/, '');
  window.history.replaceState(null, '', cleanPath);
  window.location.href = redirectPath;
}
