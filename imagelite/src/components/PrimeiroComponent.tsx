'use client'

export const PrimeiroComponent = () => {
    function handleClick(){
        console.log('Cliquei no botão!')
    }
  return (
    <div>
        Meu primeiro componente!
        <button onClick={handleClick}>Clique aqui!</button>
    </div>
  )
}

export const ArrowFunction = () => {
    return (
        <div>
            <p>Arrow function</p>
        </div>
    )
}

