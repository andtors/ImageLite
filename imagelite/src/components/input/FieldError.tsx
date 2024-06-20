interface FielErrorProps {
    error: any | null
}

export const FieldError: React.FC<FielErrorProps> = ({
    error
}) => {
    if (error) {
        return (
            <span className="text-red-500 text-sm">{error}</span>
        )
    }

    return false
}