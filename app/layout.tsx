import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

interface RootLayoutPropsInterface {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutPropsInterface) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
