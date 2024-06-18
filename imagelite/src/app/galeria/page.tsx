'use client'

import { Template, ImageCard } from "@/components"
import { useEffect, useState } from "react"
import { useImageService } from '@/resources/image/image.service'
import { Image } from "@/resources/image/image.resource"

const GaleriaPage = () => {

  const useService = useImageService()
  const [images, setImages] = useState<Image[]>([])
  const [query, setQuery] = useState<string>('')
  const [extension, setExtension] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function searchImage(){
    setLoading(true)
    const result = await useService.buscar(query, extension)
    setImages(result)
    setLoading(false)
    
  }

  function renderImageCard(image: Image){
    return (
      <ImageCard 
      nome={image.name} src={image.url} 
      tamanho={image.size} dataUpload={image.uploadDate} 
      extension={image.extension}
      key={image.url}/>
    ) 
  }

  function renderImageCards(){
    return images.map(renderImageCard)
  }

  return (
    <Template loading={loading}>
        <section className="flex flex-col items-center justify-center my-5">
          <div className="flex space-x-4">
            <input type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="border px-5 py-2 rounded-lg text-gray-900 "/>
            <select onChange={(e) => setExtension(e.target.value)} className="border px-4 py-2 rounded-lg text-gray-900 ">
              <option value="">All formats</option>
              <option value="PNG">PNG</option>
              <option value="JPEG">JPEG</option>
              <option value="GIF">GIF</option>
            </select>
            <button onClick={searchImage} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-300">Search</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-300">Add new</button>
          </div>
        </section>
      <section className="grid grid-cols-3 gap-8">
          {
            renderImageCards()
          }
      </section>
    </Template>
  )
}

export default GaleriaPage