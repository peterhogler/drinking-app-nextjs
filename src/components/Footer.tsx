const Footer: React.FC = () => {
    return (
        <footer className="py-4 flex flex-col md:flex-row justify-between items-center">
            <div>Peter Hogler - Drinks App</div>
            <ul className="flex gap-2">
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux Toolkit</li>
                <li>Tailwind</li>
            </ul>
        </footer>
    );
};

export default Footer;
