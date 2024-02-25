import { Html } from "next/document";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="bg-gray-100">
                <div className="container mx-auto">
                    <main>{children}</main>
                </div>
            </body>
        </html>
    )
}