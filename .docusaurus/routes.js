import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/SandboxBlog/blog',
    component: ComponentCreator('/SandboxBlog/blog', '1d5'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/archive',
    component: ComponentCreator('/SandboxBlog/blog/archive', '275'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/authors',
    component: ComponentCreator('/SandboxBlog/blog/authors', 'c5c'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/SandboxBlog/blog/authors/all-sebastien-lorber-articles', '34c'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/authors/yangshun',
    component: ComponentCreator('/SandboxBlog/blog/authors/yangshun', '97f'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/first-blog-post',
    component: ComponentCreator('/SandboxBlog/blog/first-blog-post', '73f'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/greetings',
    component: ComponentCreator('/SandboxBlog/blog/greetings', '5d7'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/long-blog-post',
    component: ComponentCreator('/SandboxBlog/blog/long-blog-post', '266'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/mdx-blog-post',
    component: ComponentCreator('/SandboxBlog/blog/mdx-blog-post', '803'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/tags',
    component: ComponentCreator('/SandboxBlog/blog/tags', 'a1c'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/tags/docusaurus',
    component: ComponentCreator('/SandboxBlog/blog/tags/docusaurus', '597'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/tags/facebook',
    component: ComponentCreator('/SandboxBlog/blog/tags/facebook', '220'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/tags/greetings',
    component: ComponentCreator('/SandboxBlog/blog/tags/greetings', '49b'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/tags/hello',
    component: ComponentCreator('/SandboxBlog/blog/tags/hello', 'b93'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/tags/hola',
    component: ComponentCreator('/SandboxBlog/blog/tags/hola', '147'),
    exact: true
  },
  {
    path: '/SandboxBlog/blog/welcome',
    component: ComponentCreator('/SandboxBlog/blog/welcome', 'f67'),
    exact: true
  },
  {
    path: '/SandboxBlog/markdown-page',
    component: ComponentCreator('/SandboxBlog/markdown-page', 'a13'),
    exact: true
  },
  {
    path: '/SandboxBlog/test-page',
    component: ComponentCreator('/SandboxBlog/test-page', '208'),
    exact: true
  },
  {
    path: '/SandboxBlog/docs',
    component: ComponentCreator('/SandboxBlog/docs', '3af'),
    routes: [
      {
        path: '/SandboxBlog/docs',
        component: ComponentCreator('/SandboxBlog/docs', '5a3'),
        routes: [
          {
            path: '/SandboxBlog/docs',
            component: ComponentCreator('/SandboxBlog/docs', 'bea'),
            routes: [
              {
                path: '/SandboxBlog/docs/category/tutorial---basics',
                component: ComponentCreator('/SandboxBlog/docs/category/tutorial---basics', '784'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/category/tutorial---extras',
                component: ComponentCreator('/SandboxBlog/docs/category/tutorial---extras', '520'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/hello',
                component: ComponentCreator('/SandboxBlog/docs/hello', 'bc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/intro',
                component: ComponentCreator('/SandboxBlog/docs/intro', 'c04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/SandboxBlog/docs/tutorial-basics/congratulations', '271'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/SandboxBlog/docs/tutorial-basics/create-a-blog-post', '583'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/SandboxBlog/docs/tutorial-basics/create-a-document', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/SandboxBlog/docs/tutorial-basics/create-a-page', 'a6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/SandboxBlog/docs/tutorial-basics/deploy-your-site', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/SandboxBlog/docs/tutorial-basics/markdown-features', '3d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/SandboxBlog/docs/tutorial-extras/manage-docs-versions', '722'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SandboxBlog/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/SandboxBlog/docs/tutorial-extras/translate-your-site', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/SandboxBlog/',
    component: ComponentCreator('/SandboxBlog/', 'bd8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
