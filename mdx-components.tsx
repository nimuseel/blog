import {
  useMDXComponents as getBlogMDXComponents,
} from 'nextra-theme-blog';
import { MDXComponents } from 'nextra/mdx-components';

const blogComponents = getBlogMDXComponents();

export function useMDXComponents(components: MDXComponents) {
  return {
    ...blogComponents,
    ...components,
  };
}
