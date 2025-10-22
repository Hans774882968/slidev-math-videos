import type { Router } from 'vue-router';
import { hasPpt } from './ppts';

const GITHUB_PAGE_BASE = '/slidev-math-videos/';

export function getWebsiteBasePath() {
  const isGitHubPages = import.meta.env.VITE_DEPLOY_TARGET === 'github-pages';
  const basePath = isGitHubPages ? GITHUB_PAGE_BASE : '/';
  return basePath;
}

export function defaultRedirect(cleanPath: string, normalizedRedirectParam: string) {
  window.history.replaceState(null, '', cleanPath);
  window.location.href = normalizedRedirectParam;
}

/**
 * 从 redirectParam 中提取 pptPath 和 page，并构造重定向目标
 * 这个项目和前两个部署到 GitHub Pages 的项目不一样，所以这里的实现会比较怪异
 */
export function redirectToDestination(router: Router) {
  const urlParams = new URLSearchParams(window.location.search);
  const redirectParam = urlParams.get('redirect');
  if (!redirectParam) {
    return;
  }
  const normalizedRedirectParam = redirectParam.startsWith('/') ? redirectParam : `/${redirectParam}`;
  const { pathname: redirectPathname, searchParams: redirectSearchParams } = new URL(normalizedRedirectParam, window.location.origin);
  // 移除重定向参数
  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete('redirect');
  const cleanPath = cleanUrl.pathname + cleanUrl.search;

  const isGitHubPages = import.meta.env.VITE_DEPLOY_TARGET === 'github-pages';

  // 拆分路径段，过滤空字符串
  const pathSegments = redirectPathname.split('/').filter(Boolean);

  const pptIndex = isGitHubPages ? 1 : 0; // GitHub Pages 多一层 base path
  if (pptIndex >= pathSegments.length) {
    defaultRedirect(cleanPath, normalizedRedirectParam);
    return;
  }

  const pptPath = pathSegments[pptIndex];
  if(!pptPath || !hasPpt(pptPath)) {
    router.push('/404');
    return;
  }

  const destinationBasePart = isGitHubPages
    ? `/${pathSegments[0]}/${pptPath}/`
    : `/${pptPath}/`;

  // 提取页码部分： redirectPathname 中 destinationBasePart 之后的内容
  const pagePart = redirectPathname.replace(destinationBasePart, '');
  const pageMatch = pagePart.match(/^(\d+)(?:\/.*)?$/); // 只取开头的数字
  const page = pageMatch && pageMatch[1] ? parseInt(pageMatch[1], 10) : null;

  // 构造目标 redirect URL 合并原有 query 和 page 参数
  const targetUrl = new URL(`${destinationBasePart}?${redirectSearchParams}`, window.location.origin);
  if (page !== null && page > 0) {
    targetUrl.searchParams.set('page', String(page));
  }

  window.history.replaceState(null, '', cleanPath);
  window.location.href = targetUrl.toString();
}
