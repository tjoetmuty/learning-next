import '@/styles/global.css'


export const metadata = {
  title: "Learning Next.js 14 with JavaScript Mastery",
  description: "this project is called promptopia where you can discover and share AI prompts",
};

const RootLayout = ({children}) => {
  return (
    <html lang="eng">
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout