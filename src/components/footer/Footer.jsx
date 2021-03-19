
export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="w-100">
            <div className="p-5 max-w-screen-xl | mx-auto">
                <hr />
                <p>Made with ❤️ by Ítalo Franco.</p>
                <p>Copyright &copy; 2021 - {year}</p>
            </div>
        </footer>
    )
}
