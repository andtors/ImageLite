
type Props = {
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
    style?: string
    placeholder?: string
    id?: string
    value?: string
}

export const InputText: React.FC<Props> = ({style, ...rest}: Props) => {
  return (
    <input type="text"
            {...rest}
            className={`${style} border px-3 py-2 rounded-lg text-gray-900`}
            />
  )
}
