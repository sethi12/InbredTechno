// src/app/layout.js
import './globals.css';
import Navbar from './components/navbar';


export const metadata = {
  title: 'InbredTechno',
  description: 'Building Future-Ready Digital Products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
