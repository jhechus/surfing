import Link from "next/link"

const HighlightArticule = ({data}) => {

    const {  headline, excerpt, slug, featureedImage } = data;

  return (
    <article className="highlight-article">
        <div className="highlight-article_info">
            <h3>{headline} </h3>
            <p className="copy"> {excerpt} </p>
            <Link className="btn btn-turquoise btn-medium" href={`/blog/${slug}`}>
                Read more
            </Link>
        </div>

        <img className="highlight-article_image" src={featureedImage} alt="" />

    </article>
  )
}

export default HighlightArticule