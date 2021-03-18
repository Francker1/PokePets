
export const Footer = () => {

    const date = new Date();

    return (
        <div className="p-5">
            <hr />
            <p>Made with ❤️ by Ítalo Franco.</p>
            <p>Copyright &copy; 2021 - {date.getFullYear()}</p>
        </div>
    )
}
