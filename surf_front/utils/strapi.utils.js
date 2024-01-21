import axios from "axios"
import Link from "next/link";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1338"

// Función para obtener datos desde Strapi
export async function fetchDatafromStrapi(route) {
    const url = `${BASE_URL}/api/${route}`

    try {
        const response = await axios.get(url)
        return response.data.data;
    } catch (err) {
        throw new Error(`No se encontraron datos de ${url}`)
    }
}

// Función para procesar los bloques de información
export function processinfoBlocks(data){
    // Extraer bloques de información en bruto desde la respuesta de Strapi
    const infoBlockRaw = data.attributes.info_blocks.data

    // Mapear y transformar cada bloque de información
    return infoBlockRaw.map((infoBlock) => ({
      ...infoBlock.attributes, // Extraer atributos del bloque
      imageSrc: BASE_URL + infoBlock.attributes?.image?.data?.attributes?.url, // Construir la URL completa de la imagen
      id: infoBlock.id, // Incluir el ID del bloque
      button: createinfoBlockButton(infoBlock.attributes.button),
    }));
}


function createinfoBlockButton(buttonData) {
    if (!buttonData) {
        return null;
    }

    return(
        <Link href={`/${buttonData.slug}`} 
            className={`btn btn-medium btn-${buttonData.colour}`}
        >
            {buttonData.text}
        </Link>
    )
}


// blogpage

export async function fetchBlogArticles() {
    const blogData = await fetchDatafromStrapi("blog-articles?populate=deep")
    const processedBlogArticles = blogData.map(processBlogArticle)

    processedBlogArticles.sort(
        (a, z) => new Date(z.publishedAt) - new Date(a.publishedAt) 
    )

    return processedBlogArticles;
}

function processBlogArticle(article){
    return {
        ...article.attributes,
        id: article.id,
        featuredimage: 
            BASE_URL + article.attributes?.featuredimage?.data?.attributes?.url,
    }
}