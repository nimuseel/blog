export default {
  footer: <p>{new Date().getFullYear()} © nimuseel</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  postFooter: null,
  darkMode: true,
  navs: [
    {
      name: 'Github',
      url: 'https://github.com/nimuseel/',
    },
  ],
};
