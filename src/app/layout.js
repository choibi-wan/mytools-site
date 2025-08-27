import './globals.css'

export const metadata = {
  title: 'My Tools',
  description: '다양한 변환기 모음',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}