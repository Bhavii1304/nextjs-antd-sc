import { AuthWrapper, AuthBanner, FormContainer } from './AuthLayout.styled'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthWrapper>
          <AuthBanner />
          <FormContainer>{children}</FormContainer>
        </AuthWrapper>
      </body>
    </html>
  )
}
