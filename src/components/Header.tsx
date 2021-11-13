interface HeaderProps {
    selectedGenreTitle: string
}

export function Header(props: HeaderProps) {
    const { selectedGenreTitle } = props
    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
        </header>
    )
}