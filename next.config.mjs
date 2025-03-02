import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
  codeHighlight: true,
})

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true
})