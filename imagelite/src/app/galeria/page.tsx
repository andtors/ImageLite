'use client'

import { Template, ImageCard } from "@/components"
import { useState } from "react"

const GaleriaPage = () => {


  const image1 = "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp"
  const image2 = "https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"

  const [codigoImagem, setCodigoImagem] = useState<number>(1)
  const [urlImage, setUrlImage] = useState<string>(image1)

  function mudarImager(){
    if(codigoImagem == 1){
      setCodigoImagem(2)
      setUrlImage(image2)
    } else {
      setCodigoImagem(1)
      setUrlImage(image1)
    }
  }

  return (
    <Template>
      <button onClick={mudarImager} >Clique para mudar</button>
      <section className="grid grid-cols-3 gap-8">
        <ImageCard dataUpload="18/06/2024" src={urlImage} nome="Paisagem" tamanho="10mb" />
        <ImageCard dataUpload="18/06/2024" src={urlImage} nome="Paisagem" tamanho="10mb" />
        <ImageCard dataUpload="18/06/2024" src={urlImage} nome="Paisagem" tamanho="10mb" />
        <ImageCard dataUpload="18/06/2024" src={urlImage} nome="Paisagem" tamanho="10mb" />
        <ImageCard dataUpload="18/06/2024" src={urlImage} nome="Paisagem" tamanho="10mb" />
      </section>
    </Template>
  )
}

export default GaleriaPage